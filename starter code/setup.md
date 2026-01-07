# PolyChat – Setup Instructions

This document explains how to set up and run the PolyChat application locally.

---

## 1. Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js)
- **MongoDB Atlas account** (required for Task 2)
- A modern web browser (Chrome / Edge / Firefox)

---

## 2. Project Structure
root/
├── backend/
│ ├── api/
│ │ ├── controller.js
│ │ ├── model.js
│ │ └── route.js
│ ├── index.js
│ ├── .env
│ └── node_modules/
├── frontend/
│ ├── screen1.html
│ ├── screen2.html
│ ├── styles.css
│ ├── screen2.js
│ └── script.js
└── SETUP.md


---

## 3. Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
PORT=3000

GITHUB_TOKEN= your_github_token

# OpenAI (Free tier)
OPENAI_API_KEY=your_openai_api_key

# Google Gemini (Free tier)
GEMINI_API_KEY=your_gemini_api_key

# cohere (Free tier)
COHERE_API_KEY=your_cohere_api_key

# MongoDB Atlas (required for Task 2)
MONGODB_URI=your_mongodb_connection_string

##Installing dependencies
cd backend
npm install

5. Running the Backend Server

Start the backend server using:
node index.js

If successful, you should see:
PolyChat API server is running on port 3000
Connected to MongoDB

6. Running the Frontend

The frontend is served automatically by the backend.
Open your browser and navigate to: http://localhost:3000
This will load Screen 1 (Landing Screen).

7. Application Usage
Screen 1 – Landing Screen
Select an LLM model manually (OpenAI, Gemini, Claude, or Auto).
Enter a query and submit.
The app redirects to Screen 2 with a new chat session.

Screen 2 – Chat Conversation Screen
View the conversation history.
Switch models during an ongoing conversation.
Ask follow-up questions (context is preserved).

8. Auto Mode Behavior

Auto mode selects the most suitable model based on query intent:
Reasoning / Code → OpenAI
Summarization → Claude
Factual / Search → Gemini
If any model fails, the system automatically falls back to OpenAI.
Context is preserved across all model switches.

