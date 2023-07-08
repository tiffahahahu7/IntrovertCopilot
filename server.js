const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: '...',
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  const { message } = req.body;

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
    temperature: 1
  });

  res.json({ message: completion.data.choices[0].message.content });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});








