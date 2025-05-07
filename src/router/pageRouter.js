import express from 'express';
import { PageHome } from '../pages/PageHome.js';
import { Page404 } from '../pages/Page404.js';

export const pageRouter = express.Router();

pageRouter.get('/', (req, res) => res.send(new PageHome().render()));
pageRouter.get('*error', (req, res) => res.send(new Page404().render()));