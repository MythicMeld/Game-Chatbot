# French Game Story Generator

## Project Overview

This project is a French Story Game Generator, consisting of a backend API powered by FastAPI, a frontend application built with Vite and React, and a language model named Phi-3 executed using Ollama. The backend generates French stories based on user inputs and provides these stories to the frontend for display and interaction. The project also utilizes Retrieval-Augmented Generation (RAG) and LangChain for intelligent querying and a vector database, ChromaDB, for storing embedded vectors. Additionally, users can upload PDF files and ask questions within the content of those PDFs.

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

### Additional Tools
- RAG
- LangChain
- ChromaDB
  
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

