const db = require('../db/queries');
const { body, validationResult } = require('express-validator');

const validateMessage = [
  body('messageUser')
    .isLength({ min: 1, max: 50 })
    .withMessage('Username must be between 1 and 50 characters.'),
  body('messageText')
    .isLength({ min: 1, max: 250 })
    .withMessage('Message must be between 1 and 250 characters.'),
];

async function getMessages(req, res) {
  const messages = await db.queryGetAllMessages();
  res.render('index', { title: 'Message board', messages: messages });
}

const getNewMessageForm = (req, res) => {
  res.render('form', { title: 'Message board' });
};

const createNewMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('form', {
        title: 'Message board',
        errors: errors.array()
      });
    }
    try {
      const { messageText, messageUser } = req.body;
      const currentDate = new Date().toISOString().split('T')[0];
      await db.queryCreateNewMessage(messageText, messageUser, currentDate);
      res.redirect('/');
    } catch (err) {
      res.status(500).send(err.message || err);
    }
  },
];

const renderPageNotFound = (req, res) => {
  res.render('notFound');
};

module.exports = {
  getMessages,
  getNewMessageForm,
  createNewMessage,
  renderPageNotFound,
};