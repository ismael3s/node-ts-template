import { app } from './app';

const PORT = process.env.PORT || 3000;

app
  .listen(PORT)
  .on('listening', () =>
    console.log(`Server running at http://localhost:${PORT} ✔`)
  );
