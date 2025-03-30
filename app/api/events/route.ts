import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const { type, prompt } = await req.json();

    if (type == "groq"){
      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", 
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 200,
      });
    
    return NextResponse.json(response);

    }

    else if (type == "unsplash"){
      const image_response = await fetch(`https://api.unsplash.com/search/photos?query=${prompt}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY!}`);

      const imageData = await image_response.json();
      return NextResponse.json(imageData);
    }
    else{
      return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
    }

  } 
  catch (error) {
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}
