const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const API_KEY = 'a422825d9b7644fd91f1b20cc4133d13'; // Your API key

app.use(cors()); // Enable CORS

app.get('/news/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`);
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send(error.toString());
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
