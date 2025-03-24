import { Request, Response } from 'express';

export const pingCheck = (req: Request, res: Response) => {
  console.log(req.url);

  res.json({ message: 'Pong' });
};
