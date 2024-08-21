import express from 'express';
import mapRoutes from './routes';

const app = express();

mapRoutes(app);
app.listen(1245, () => {
  console.log('Server listening on PORT 1245');
});

export default app;
module.exports = app;
