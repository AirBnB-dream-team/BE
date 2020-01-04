const server = require("./server");
const secrets = require("./secrets");

const PORT = secrets.PORT;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
