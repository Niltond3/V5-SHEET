import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Character from './Character';

@Entity('players')
class Player {
  @PrimaryColumn({
    type: 'varchar',
    unique: true,
  })
  id: string;

  @Column()
  name: string;

  @Column('simple-array')
  characters_id: string[];

  @OneToMany(() => Character, character => character.player_id)
  @JoinColumn({ name: 'characters_id' })
  provider: Character;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Player;
