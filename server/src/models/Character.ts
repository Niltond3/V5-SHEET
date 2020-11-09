import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Player from './Player';

@Entity('characters')
class Character {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  // @Column('json', { array: true })
  // attribs: [{ name: string; current: string; max: string; id: string }];
  @Column('simple-json')
  attribs: [{ name: string; current: string; max: string; id: string }];

  @Column()
  player_id: string;

  @ManyToOne(() => Player)
  @JoinColumn({ name: 'player_id' })
  provider: Player;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Character;
