import { Router } from 'express';

const routes = new Router();

// Rotas de Usuário
routes.get('/', (req, res) => {
  return res.json({ mensagem: 'Portal do Aluno' });
});

export default routes;
