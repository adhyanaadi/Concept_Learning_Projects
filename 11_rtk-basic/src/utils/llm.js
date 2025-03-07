// We do not need dotenv package in frontend for using env
// VITE_SOME_KEY=123
// DB_PASSWORD=foobar
// Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.
const API_KEY = import.meta.env.VITE_LLM_API_KEY

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const genAIResponse = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    return response
  } catch (err) {
    console.log("Failed to fetch your response:", err);
    return "Error!";
  }
};
