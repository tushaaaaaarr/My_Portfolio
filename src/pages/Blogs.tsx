import React from 'react';
import './Blogs.css';
import { FaMedium } from 'react-icons/fa';

const blogs = [
  {
    title: "Tech & AI: Beyond the Hype to Raw Utility",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@tushar.mah.0111/tech-ai-beyond-the-hype-to-raw-utility-96146a76d011",
    description: "An unfiltered take on modern AI orchestration. Why successful enterprises are abandoning prompt engineering to build robust, graph-based autonomous agent systems.",
  },
  {
    title: "Stop Writing Bad Git Commit Messages: The 3-Rule Guide",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@tushar.mah.0111/stop-writing-bad-git-commit-messages-the-3-rule-guide-to-clean-repositories-d974c751ff00",
    description: "Let’s face it: your Git history is probably a mess. A no-nonsense guide to fixing lazy commit habits using conventional tags, the imperative mood, and the 50/72 formatting rule.",
  },
  {
    title: "The Mountain Reset: Why Your Brain Craves the Altitude",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@tushar.mah.0111/the-mountain-reset-why-your-brain-craves-the-altitude-80e9d8ada572",
    description: "Why passive beach vacations are failing your burnout. A no-nonsense look at how heading to the mountains triggers a biological reset, quiets urban static, and restores your attention span.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
