import { EntityRepository, Repository } from 'typeorm';
import Character from '../models/Character';

@EntityRepository(Character)
class CharacterRepository extends Repository<Character> {}

export default CharacterRepository;
