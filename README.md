# French Game Story Generator

## Project Overview

This project is a French Story Game Generator, consisting of a backend API powered by FastAPI, a frontend application built with Vite React, and a language model named Phi-3 executed using Ollama. The backend generates French stories based on user inputs and provides these stories to the frontend for display and interaction.

## Requirements

### Backend
- Python 3.8+
- FastAPI
- Uvicorn

### Frontend
- Node.js 14+
- Vite

### Model
- Phi-3
- Ollama 
  
## Installation

### Backend
- git clone https://github.com/MythicMeld/Game-Chatbot.git
- cd Game-Chatbot/server
- uvicorn main:app --reload

### Frontend 
- cd Game-Chatbot/chatbot
- npm install
- npm run dev

### Running the Model
- ollama serve

