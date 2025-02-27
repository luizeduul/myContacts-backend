const CategoriesRepository = require('../repositories/CategoriesRepository');
const isValidUUID = require('../utils/isValidUUID');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid category id' });
    }

    const category = await CategoriesRepository.findById(id);

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({
        error: 'Name is required',
      });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid category id' });
    }

    const { name } = request.body;

    const exists = await CategoriesRepository.findById(id);

    if (!exists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (name) {
      const categoryExistsByName = await CategoriesRepository.findByName(name);

      if (categoryExistsByName && categoryExistsByName.id !== id) {
        return response.status(400).json({
          error: 'This category name already in use',
        });
      }
    }

    const category = await CategoriesRepository.update(id, { name });

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.deleteById(id);

    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
