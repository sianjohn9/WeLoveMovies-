const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?";
const tellPromise = tell(question);
tellPromise.then((fortune) => {
  console.log(question);
  console.log(fortune);
});