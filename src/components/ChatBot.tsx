import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import { FaTimes, FaPaperPlane, FaExpand, FaCompress } from 'react-icons/fa';
import { SiGooglegemini } from 'react-icons/si';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const formatInlineText = (text: string): React.ReactNode[] => {
  const segments = text.split(/(\*\*[^*]+\*\*|_[^_]+_|`[^`]+`)/g).filter(Boolean);

  return segments.map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={`${segment}-${index}`}>{segment.slice(2, -2)}</strong>;
    }

    if (segment.startsWith('_') && segment.endsWith('_')) {
      return <em key={`${segment}-${index}`}>{segment.slice(1, -1)}</em>;
    }

    if (segment.startsWith('`') && segment.endsWith('`')) {
      return <code key={`${segment}-${index}`}>{segment.slice(1, -1)}</code>;
    }

    return <React.Fragment key={`${segment}-${index}`}>{segment}</React.Fragment>;
  });
};

const formatMessageContent = (text: string): React.ReactNode => {
  const normalized = text.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return null;
  }

  const blocks = normalized.split(/\n\s*\n/);

  return blocks.map((block, blockIndex) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);

    if (lines.length === 0) {
      return null;
    }

    if (lines.every((line) => line.startsWith('- ') || line.startsWith('* '))) {
      return (
        <ul key={`block-${blockIndex}`}>
          {lines.map((line, lineIndex) => (
            <li key={`${blockIndex}-${lineIndex}`}>{formatInlineText(line.replace(/^[-*]\s*/, ''))}</li>
          ))}
        </ul>
      );
    }

    if (lines.length === 1 && /^#{1,3}\s+/.test(lines[0])) {
      const level = lines[0].match(/^#+/)?.[0].length || 1;
      const content = lines[0].replace(/^#{1,3}\s+/, '');
      const HeadingTag = `h${Math.min(level, 3)}` as keyof JSX.IntrinsicElements;
      return <HeadingTag key={`block-${blockIndex}`}>{formatInlineText(content)}</HeadingTag>;
    }

    return (
      <p key={`block-${blockIndex}`}>
        {lines.map((line, lineIndex) => (
          <React.Fragment key={`${blockIndex}-${lineIndex}`}>
            {lineIndex > 0 && <br />}
            {formatInlineText(line)}
          </React.Fragment>
        ))}
      </p>
    );
  });
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "I am Jarvis, Tushar's AI Assistant. I am here to provide you with precise, professional information about Tushar's skills, experience, and accomplishments. How may I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use relative path for Vercel deployment
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000/api/chat'
        : '/api/chat';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          conversationHistory: messages
            .filter((m) => m.id !== '1') // Exclude initial greeting
            .map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text,
            })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const reply = data.reply || 'Sorry, I could not generate a response.';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: reply,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble responding right now. Make sure the backend server is running on port 5000.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        title="Ask me anything!"
      >
        <SiGooglegemini size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chatbot-window ${isFullscreen ? 'fullscreen' : ''}`}>
          <div className="chatbot-header">
            <div className="chatbot-title">
              <SiGooglegemini size={18} />
              <span>Chat with Jarvis</span>
            </div>
            <div className="chatbot-header-actions">
              <button
                className="chatbot-fullscreen"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <FaCompress size={18} /> : <FaExpand size={18} />}
              </button>
              <button
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message message-${message.sender}`}
              >
                <div className="message-content">{formatMessageContent(message.text)}</div>
              </div>
            ))}
            {isLoading && (
              <div className="message message-bot">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="chatbot-send"
              title="Send message"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
