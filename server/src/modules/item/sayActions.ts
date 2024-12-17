import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send(
    `Welcome to Wild Series ${req.query.name}, you're ${req.query.age} years old`,
  );
};

export default sayWelcome;
