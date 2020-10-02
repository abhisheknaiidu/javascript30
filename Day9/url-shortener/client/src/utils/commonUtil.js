const copyToClipBoard = (txtElem) => {
  txtElem.select();
  document.execCommand("copy");
}

const targetElementById = (id) => {
  const textBox =  document.getElementById(id);
  return textBox
}

const setValueToSessionStorage = (keyName, userSessionObj) => {
  sessionStorage.setItem(keyName, JSON.stringify(userSessionObj))
}

const getValueFromSession = (key) => {
  const sessionData = JSON.parse(sessionStorage.getItem(key));
  return sessionData
}

export default {
  copyToClipBoard,
  targetElementById,
  setValueToSessionStorage,
  getValueFromSession
}