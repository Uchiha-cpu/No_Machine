import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

interface OllamaResponse {
  response: string;
}

app.post('/api/generate', async (req, res) => {
  const { topic } = req.body;

  const prompt = `You are an expert in communication. A user wants to decline the following request: "${topic}".

Generate three distinct ways to say "no" to this request. Each response should represent a different style of communication:
1.  **The Direct No:** A clear, concise, and polite refusal without excessive explanation.
2.  **The Empathetic No:** Acknowledge the request and the other person's feelings, but still decline firmly.
3.  **The "Propose an Alternative" No:** Decline the current request but suggest a different solution or a future opportunity to connect.

Present the three responses clearly.`;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'phi',
        prompt: prompt,
        stream: false,
      }),
    });

    const data = (await response.json()) as OllamaResponse | { error: string };

    if ('error' in data) {
      console.error('Ollama API Error:', data.error);
      res.status(500).json({ error: `Failed to generate responses from the model: ${data.error}` });
      return;
    }

    const generatedResponses = data.response.split('\n').filter((line: string) => line.trim().length > 0);


    res.json({ responses: generatedResponses });
  } catch (error)
  {
    console.error('Error generating responses:', error);
    res.status(500).json({ error: 'Failed to generate responses from the model.' });
  }
});

app.get('/api/advice', async (req, res) => {
  const prompt = 'Give me a random piece of advice for the day.';

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'phi',
        prompt: prompt,
        stream: false,
      }),
    });

    const data = (await response.json()) as OllamaResponse | { error: string };

    if ('error' in data) {
      console.error('Ollama API Error:', data.error);
      res.status(500).json({ error: `Failed to generate advice from the model: ${data.error}` });
      return;
    }

    res.json({ advice: data.response });
  } catch (error) {
    console.error('Error generating advice:', error);
    res.status(500).json({ error: 'Failed to generate advice from the model.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
