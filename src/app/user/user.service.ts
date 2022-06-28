import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/infrastructure/database/entities/user.entity';
import { Repository } from 'typeorm';
import { UserModel } from './model/user.model';

@Injectable()
export class UserService {
    users: UserModel[];
    constructor(
        @InjectRepository(user)
        private userRepository: Repository<user>,
    ) {}

    async findUsers(): Promise<UserModel[]> {
        try {
            return this.userRepository.find();
        } catch (error) {
            console.log(error);
        }
    }
}
