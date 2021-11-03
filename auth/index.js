const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { API_KEY, ASSISTANT_ID } = require('./config')

const assistant = new AssistantV2({
  version: '2020-09-24',
  authenticator: new IamAuthenticator({
    apikey: API_KEY
  }),
  serviceUrl: 'https://api.eu-gb.assistant.watson.cloud.ibm.com'
});

module.exports = { assistant, assistantId: ASSISTANT_ID }