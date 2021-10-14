class Store {
  #state;

  constructor () {
    this.#state = {
      'navigation': {
        'promoListURL': '/promoList',
        'createPromoURL': '/createPromo',
        'promoListInfo': 'Список объявлений',
        'createPromoInfo': 'Разместить новое объявление',
      }
    }
  }

  get state () {
    return this.#state;
  }
}

const store = new Store();

export { store }
