const { Router } = require('express');
const messagesController = require('../controllers/messagesController');

const messagesRouter = Router();
  
messagesRouter.get('/', messagesController.getMessages);
messagesRouter.get('/new', messagesController.getNewMessageForm);
messagesRouter.post('/new', messagesController.createNewMessage);
messagesRouter.get('*', messagesController.renderPageNotFound);

module.exports = messagesRouter;