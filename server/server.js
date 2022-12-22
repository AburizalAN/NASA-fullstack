const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await loadPlanetsData();
    server.listen(PORT, () => {
      console.log('Listening on port', PORT);
    });
  } catch (err) {
    console.log(err)
  }
};

startServer();
