"use server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI();
const MsgSendingAction = async (message: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
  });
  return response.text || "nothign";
};

export default MsgSendingAction;
