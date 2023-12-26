import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const openai = new OpenAI({
    apiKey:"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", 
    organization:"org-donevqTOblPSfFn0PHkr8izU",
});

const app = express();
const port=3000;
app.use(bodyParser.json());
app.use(cors())

app.post("/",async(req,res)=>{
    const {messages}=req.body;
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a DesignGPT helpful assistant graphics design chatbot"},
        ...messages
        ],
        model: "gpt-3.5-turbo",
    });
    
    res.json({completion:completion.choices[0].message.content});
});

app.listen(port,()=>
{
    console.log(`listening at http://localhost:${port}`);
});

