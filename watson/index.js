const { assistant, assistantId } = require("../auth");

let sessionId;

async function createSession() {
  if (sessionId) {
    return sessionId;
  }

  const request = await assistant.createSession({ assistantId });
  sessionId = request.result.session_id;
  return sessionId;
}

async function addMessage(input) {
  let messageSessionId;
  try {
    messageSessionId = await createSession();
  } catch (err) {
    sessionId = null;
    messageSessionId = await createSession();
  }

  const message = await assistant.message({
    assistantId,
    sessionId: messageSessionId,
    input: {
      text: input,
    },
  });

  return message.result;
}

async function getGreeting() {
  let messageSessionId;
  try {
    messageSessionId = await createSession();
  } catch (err) {
    sessionId = null;
    messageSessionId = await createSession();
  }

  const message = await assistant.message({
    assistantId,
    sessionId: messageSessionId,
    input: {
      text: "",
    },
  });

  return message.result;
}

module.exports = { addMessage, getGreeting };
