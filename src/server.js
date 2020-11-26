const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, (req, res) => {
  console.log(`🚀  Server ready at http://localhost:${PORT}/`);
});
