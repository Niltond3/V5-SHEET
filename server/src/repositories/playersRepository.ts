import { EntityRepository, Repository } from 'typeorm';
import Player from '../models/Player';

@EntityRepository(Player)
class PlayerRepository extends Repository<Player> {}

export default PlayerRepository;
