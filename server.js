const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static(__dirname, 'dist'));
app.get('/', res.send(express.static(__dirname, 'dist')));

app.listen(PORT, ()=> `Server running on port ${PORT}`);

