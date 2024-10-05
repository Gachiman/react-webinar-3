import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      currentPage: 1,
      limit: 10,
      totalCount: 0,
    };
  }

  async load( page=1 ) {
    const { limit } = this.getState();
    const skip = (page - 1) * limit;
    const response = await fetch(
      `/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(*),count`
    );
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        currentPage: page,
        totalCount: json.result.count,
      },
      'Загружены товары из АПИ',
    );
  }

  setPage(page) {
    this.load(page);
  }
}

export default Catalog;
