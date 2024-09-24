import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const VALID_TOKEN = process.env.TOKEN;

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }
  if (token !== VALID_TOKEN) {
    return res.status(403).json({ message: 'Token inválido' });
  }
  next();
}

