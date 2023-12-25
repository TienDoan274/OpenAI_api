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

