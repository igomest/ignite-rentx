import { CategoryRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/*
   [] - Definir o tipo de retorno
   [X] - Alterar o retorno de erro
   [X] - Acessar o repositório
 */
class CreateCategoryService {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
