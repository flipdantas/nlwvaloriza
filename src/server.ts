import express, { request } from 'express';

const app = express();

app.get('/test', (request, response) => {
  return response.send('IAE PESSOAAAAAAAL')
});

app.post("/test-post", (request, response) => {
  return response.send("Hello galerinha")
})

app.listen(3000, () => console.log("Server is running!"));