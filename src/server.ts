import express from "express";
import cors from "cors";
import serverlessExpress from '@vendia/serverless-express';

const app = express();
/*const PORT = process.env.PORT || 7747;*/

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

/*
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/

export const handler = serverlessExpress({ app });