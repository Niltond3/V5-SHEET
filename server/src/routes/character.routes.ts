import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CharactersRepository from '../repositories/charactersRepository';
import CreateCharacterService from '../services/CreateCharacterService';

const characterRouter = Router();

characterRouter.get('/', async (request, response) => {
  const charactersRepository = getCustomRepository(CharactersRepository);
  const characters = await charactersRepository.find();

  return response.json(characters);
});

characterRouter.post('/', async (request, response) => {
  try {
    const { name, avatar, player_id, attribs } = request.body;
    const createCharacter = new CreateCharacterService();

    const character = await createCharacter.execute({
      name,
      avatar,
      player_id,
      attribs,
    });

    return response.json(character);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: error.message });
  }
});

export default characterRouter;
