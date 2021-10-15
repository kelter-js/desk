class Store {
  #state;

  constructor() {
    this.#state = {
      'navigation': {
        'promoList': {
          'text': 'Список объявлений',
        },
        'createPromo': {
          'text': 'Разместить новое объявление',
        },
      },
      'urls': {
        'promoList': '/promoList',
        'createPromo': '/createPromo',
      },
      'promoCreation': {
        'promoStages': [
          'Категория',
          'Описание',
          'Цена',
          'Фотографии',
          'Местоположение',
          'Контакты',
        ],
        'header': 'Новое объявление',
        'firstStage': {
          'itemName': 'Название',
          'namePlaceholder': 'Название товара',
          'attention': 'Название не должно превышать 50? символов',
          'itemCategory': 'Категория',
          'firstCategoryId': '1',
          'secondCategoryId': '2',
          'thirdCategoryId': '3',
          'categories': [
            'Выберете категорию',
            'Авто',
            'Недвижимость',
            'Сервисы',
          ],
        }
      },
    }
  }

  get state() {
    return this.#state;
  }
}

const store = new Store();

export { store }
