const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const requestBody = req.body;
    res.json(requestBody);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
