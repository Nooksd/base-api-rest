import app from './app.js';

const port = 3000;
app.listen(port, () => {
  console.log();
  console.log(`listening to the port: ${port}`);
  console.log(`CRTL + click: http://localhost:${port}`);
});
