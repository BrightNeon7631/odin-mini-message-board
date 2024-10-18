const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const getMessages = (req, res) => {
    res.render('index', { title: 'Message board', messages: messages });
}

const getNewMessageForm = (req, res) => {
    res.render('form');
}

const createNewMessage = (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
}

const renderPageNotFound = (req, res) => {
    res.render('notFound');
}

module.exports = { getMessages, getNewMessageForm, createNewMessage, renderPageNotFound }