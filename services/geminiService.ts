import { GoogleGenAI, Type } from "@google/genai";

const AI_MODEL = 'gemini-3-pro-preview';

interface ReceiptData {
  amount: number;
  merchant: string;
  date: string;
  category: string;
}

export const analyzeReceiptImage = async (base64Data: string, mimeType: string): Promise<ReceiptData> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: AI_MODEL,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Data
            }
          },
          {
            text: "Analyze this receipt image. Extract the total amount, merchant name, date (YYYY-MM-DD format), and suggest a category from: 'Food & Dining', 'Groceries', 'Transportation', 'Shopping', 'Entertainment', 'Health', 'Bills & Utilities', 'Other'. If details are missing, estimate or use current date."
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            amount: { type: Type.NUMBER },
            merchant: { type: Type.STRING },
            date: { type: Type.STRING },
            category: { type: Type.STRING }
          },
          required: ["amount", "merchant", "date", "category"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text from Gemini");
    
    return JSON.parse(text) as ReceiptData;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};