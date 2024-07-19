const express = require('express');
const moment = require('moment-timezone');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/convert', (req, res) => {
  const { date, from, to } = req.query;

  if (!date || !from || !to) {
    return res.status(400).send('Date, from timezone, and to timezone are required.');
  }

  try {
    const convertedDate = moment.tz(date, from).tz(to).format();
    res.json({ convertedDate });
  } catch (error) {
    res.status(500).send('Error converting time.');
  }
});

app.listen(port, () => {
  console.log(`Timezone converter app listening at http://localhost:${port}`);
});
