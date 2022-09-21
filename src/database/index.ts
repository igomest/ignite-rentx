import { DataSource } from 'typeorm';
import { User } from '../modules/accounts/entities/User';
import { Category } from '../modules/cars/entities/Category';
import { Specification } from '../modules/cars/entities/Specification';

console.log(__dirname);

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 6508,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: [Category, Specification, User],
  migrations: [`${__dirname}/migrations/*.ts`],
});
