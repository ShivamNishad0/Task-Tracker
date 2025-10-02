import { GoogleGenerativeAI } from '@google/generative-ai';

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const models = await genAI.listModels();
    console.log('Available models:', models);
  } catch (error) {
    console.error('Error listing models:', error);
  }
}

listModels();
