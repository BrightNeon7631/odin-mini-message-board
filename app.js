const express = require('express');
const path = require('node:path');
const messagesRouter = require('./routes/messagesRouter');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// parses form data into req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', messagesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));