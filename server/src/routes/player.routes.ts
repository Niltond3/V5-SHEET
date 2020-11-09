import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import PlayersRepository from '../repositories/playersRepository';

const playerRouter = Router();

playerRouter.get('/', async (request, response) => {
  const playersRepository = getCustomRepository(PlayersRepository);
  const players = await playersRepository.find();
  return response.json(players);
});

playerRouter.post('/', async (request, response) => {
  try {
    const { name, id } = request.body;
    const playersRepository = getCustomRepository(PlayersRepository);

    const player = playersRepository.create({
      id,
      name,
    });
    await playersRepository.save(player);

    return response.json(player);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default playerRouter;
