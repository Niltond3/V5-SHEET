import { getCustomRepository } from 'typeorm';
import charactersRepository from '../repositories/charactersRepository';
import playerRepository from '../repositories/playersRepository';
import Character from '../models/Character';

interface Request {
  name: string;
  avatar: string;
  player_id: string;
  attribs: [{ name: string; current: string; max: string; id: string }];
}
class CreateCharacterService {
  public async execute({
    name,
    avatar,
    player_id,
    attribs,
  }: Request): Promise<Character> {
    const CharactersRepository = getCustomRepository(charactersRepository);

    const character = CharactersRepository.create({
      name,
      avatar,
      player_id,
      attribs,
    });
    const PlayerRepository = getCustomRepository(playerRepository);

    const characterPlayer = await PlayerRepository.findOne(player_id);

    await CharactersRepository.save(character);

    if (characterPlayer) {
      if (characterPlayer.characters_id) {
        characterPlayer.characters_id.push(character.id);
      }
      characterPlayer.characters_id = [character.id];

      await PlayerRepository.update(player_id, characterPlayer);
    }

    return character;
  }
}

export default CreateCharacterService;
