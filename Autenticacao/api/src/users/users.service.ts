import { Injectable } from '@nestjs/common';
import { runInThisContext } from 'vm';
import { Account } from './account.interface';

export type User = any;

@Injectable()
export class UsersService {
  private readonly usersMock: User[];
  // private readonly usersMock: Account[];

  constructor() {
    this.usersMock = [
      {
        userId: 1,
        username: 'vinnyfs89',
        email: 'viniciusfesil@gmail.com',
        name: 'test3',
        password: 'letItGo!',
        enabled: true,
      },
      {
        userId: 2,
        username: 'luk1',
        email: 'lucas.mendes@coopersystem.com.br',
        name: 'Lucas Mendes',
        password: 'N3stG0d',
        enabled: false,
      },
      {
        userId: 3,
        username: 'kmila1',
        email: 'camiloanalista@gmail.com',
        name: 'Camilo Matheus',
        password: 'Nod3G0d',
        enabled: true,
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersMock.find(user => user.username === username);
  }
}
