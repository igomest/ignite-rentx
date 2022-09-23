import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/Repositories/IUsersRepository';
import { CategoriesRepository } from '@modules/cars/infra/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/repositories/SpecificationsRepository';
import { ICategoriesRepository } from '@modules/cars/Repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/Repositories/ISpecificationsRepository';

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
