import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserEntity from './UserEntity';

@Entity('user_tokens')
export default class UserTokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  token: string;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne((type) => UserEntity, (user) => user.userTokens)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
