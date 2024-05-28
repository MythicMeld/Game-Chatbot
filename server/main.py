from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_community.llms import Ollama

app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the Ollama model
llm = Ollama(model="phi3")

# Define request body model
class Prompt(BaseModel):
    prompt: str

# Define a route to get a response from the model
@app.post("/generate")
async def generate(prompt: Prompt):
    response = llm.invoke(prompt.prompt)
    return {"response": response}

# Define a route to handle PDF file uploads
@app.post("/upload-pdf")
async def upload_pdf(pdf: UploadFile = File(...)):
    # Here, you can handle the uploaded PDF file
    # For now, let's just return a success message
    return {"message": "File uploaded successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
