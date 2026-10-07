"use server";
import { GoogleGenAI } from "@google/genai";

const MsgSendingAction = async (message: string) => {
    const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({apiKey});
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
  });
  return response.text;
};

export default MsgSendingAction;
