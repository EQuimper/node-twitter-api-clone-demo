import TweetEntity from '@modules/tweets/infra/db/entities/TweetEntity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import UserTokenEntity from './UserTokenEntity';

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany((type) => UserTokenEntity, (userToken) => userToken.userId, {
    cascade: true,
  })
  userTokens: UserTokenEntity[];

  @OneToMany((type) => TweetEntity, (tweet) => tweet.userId, { cascade: true })
  tweets: TweetEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
