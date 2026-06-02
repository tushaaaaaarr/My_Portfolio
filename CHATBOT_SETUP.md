# ChatBot Setup Guide

## Problem Fixed
The original 401 error was happening because:
- Browser frontend cannot directly call Groq API (CORS restriction)
- API keys should not be exposed in frontend code (security)
- The API key needs to be kept secure on the backend

## Solution
Created a **Node.js/Express backend** that:
- Securely handles Groq API calls
- Acts as a proxy between frontend and Groq
- Keeps your API key safe

## Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

This installs all new dependencies including:
- `express` - Backend server
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `ts-node` - TypeScript Node runner
- `concurrently` - Run multiple commands

### Step 2: Verify .env File
Make sure your `.env` file has the Groq API key:
```
GROQ_API_KEY=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
REACT_APP_GROQ_API_KEY=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
```

### Step 3: Run Both Server and App

**Option A: Run Together (Recommended)**
```bash
npm run start:dev
```
This starts both the backend server (port 5000) and React app (port 3000)

**Option B: Run Separately (for development)**
Terminal 1 - Start backend:
```bash
npm run server
```

Terminal 2 - Start React app:
```bash
npm start
```

### Step 4: Test
1. Open http://localhost:3000
2. Click the red chat button
3. Send a message like "What are Tushar's skills?"

## Architecture

```
┌─────────────────────┐
│   React Frontend    │
│   (localhost:3000)  │
└──────────┬──────────┘
           │ HTTP Request
           ↓
┌─────────────────────┐
│  Express Backend    │
│   (localhost:5000)  │
└──────────┬──────────┘
           │ HTTPS Request
           ↓
┌─────────────────────┐
│   Groq API          │
│ (api.groq.com)      │
└─────────────────────┘
```

## File Structure
```
netflix_portfolio/
├── server.ts              ← Backend API
├── src/
│   ├── components/
│   │   ├── ChatBot.tsx    ← Frontend chat widget
│   │   └── ChatBot.css
│   └── ...
├── .env                   ← API keys (keep secret!)
└── package.json
```

## Environment Variables
```
GROQ_API_KEY=your_api_key           # Backend (from Groq Console)
REACT_APP_GROQ_API_KEY=your_api_key # Frontend (optional, not used now)
```

## Troubleshooting

### "Connection refused" Error
- Make sure backend is running: `npm run server`
- Check if port 5000 is available
- Try a different port by setting `PORT=5001` in .env

### "401 Unauthorized" Error
- Check if GROQ_API_KEY in .env is correct
- Regenerate your API key from https://console.groq.com
- Make sure there are no extra spaces in the key

### Port Already in Use
```bash
# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :5000
kill -9 <PID>
```

## Production Deployment

When deploying to production:
1. Set environment variables on your hosting platform
2. Build React: `npm run build`
3. Deploy backend separately (Render, Railway, Heroku, etc.)
4. Update ChatBot.tsx API URL to your backend domain:
```typescript
const response = await fetch('https://your-backend.com/api/chat', {
```

## Security
- ✅ API key is stored on backend only
- ✅ Never expose API keys in frontend
- ✅ CORS is enabled only for your domain
- ✅ Conversation context is handled securely
