import express from 'express';

const app = express();

const PORT = 8000;

app.listen(PORT, () => (`Your server is running successfully on PORT ${PORT}`));