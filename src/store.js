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
        'promoStagesState': {
          '0': false,
          '1': false,
          '2': false,
          '3': false,
          '4': false,
          '5': false,
        },
        'stageNumber': {
          'firstStage': 0,
          'secondStage': 1,
          'thirdStage': 2,
          'fourthStage': 3,
          'fifthStage': 4,
          'sixthStage': 5,
        },
        'formHandlers': {
          'onBlur': this._onBlur,
          'onFocus': this._onFocus,
          'onChangeStyle': this._onChangeStyle,
          'onCheck': this._onCheck,
          'onChangeField': this._onChangeField,
        },
        'header': 'Новое объявление',
        'firstStage': {
          'itemName': 'Название',
          'namePlaceholder': 'Название товара',
          'attention': 'Название не должно превышать 50? символов',
          'itemCategory': 'Категория',
          'firstCategoryId': 1,
          'secondCategoryId': 2,
          'thirdCategoryId': 3,
          'categories': [
            'Выберете категорию',
            'Авто',
            'Недвижимость',
            'Сервисы',
          ],
          'maxFieldLength': 50,
          'itemState': {
            'value': '',
            'attention': false,
          },
        },
        'secondStage': {
          'itemAnnotation': 'Описание',
          'annotationPlaceholder': 'Опишите ваш товар',
          'attentionAnnotation': 'До 4 000? символов',
          'maxFieldAnnotationLength': 4000,
          'itemPrice': 'Цена',
          'attentionPrice': 'Максимум 10 символов',
          'pricePlaceholder': '1 000 000 000 ₽',
          'maxFieldPriceLength': 10,
          'checkTrade': 'Торг',
          'checkProtected': 'Безопасная сделка',
          'checkDelivery': 'Доставка',
          'showMore': 'Подробнее',
          'protectionInfo': 'Безопасная сделка — это простой и надежный способ покупать и продавать товары по всей России Безопасная сделка — это простой и надежный способ покупать и продавать товары по всей России Безопасная сделка — это простой и надежный способ покупать и продавать товары по всей России',
          'protectionMoreInfo': 'При оплате онлайн сразу вернем деньги, если товар не устроит. При оплате онлайн доставка от 374.70 ₽ и 1 рабочего дня При оплате онлайн сразу вернем деньги, если товар не устроит. При оплате онлайн доставка от 374.70 ₽ и 1 рабочего дня При оплате онлайн сразу вернем деньги, если товар не устроит. При оплате онлайн доставка от 374.70 ₽ и 1 рабочего дня',
          'deliveryInfo': 'Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это',
          'deliveryMoreInfo': 'Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это Доставка это',
          'serviceTextState': {
            'protectionOpened': true,
            'deliveryOpened': false,
          },
          'price': {
            'value': '',
            'attention': false,
          },
          'checkboxes': {
            'trade': true,
            'protection': false,
            'delivery': false,
          },
          'photos': [],
          'itemPhoto': 'Фотографии',
          'photoButton': 'Добавьте или перетащите фото',
          'photoTypes': [
            'gif',
            'jpg',
            'jpeg',
            'png',
          ],
          'rotateText': 'Повернуть фотографию на 90 градусов',
          'deleteText': 'Отменить добавление фотографии',
          'rotateClasses': [
            '',
            'promo-creation__image-wrapper--90deg',
            'promo-creation__image-wrapper--180deg',
            'promo-creation__image-wrapper--270deg',
          ],
        },
        'thirdStage': {
          'vendorLocation': 'Местоположение',
          'locationPlaceholder': 'Введите город, улицу, дом',
          'locationAttention': 'Введите название и выберете из списка населенный пункт и улицу',
          'vendorPhone': 'Контакты',
          'phonePlaceholder': '+7 (000) 000 - 00 - 00',
          'checkMessage': 'Сообщения',
          'checkPhone': 'Телефон',
          'verifyPhone': 'Подтвердить номер',
          'requiredInfo': 'Обязательные к заполнению поля',
          'nextFields': 'Продолжить',
          'checkBoxesState': {
            'message': true,
            'call': true,
          },
          'communicationText': {
            'location': '',
            'contacts': '',
          },
        },
      },
      'promoList': {
        'header': 'Похожие объявления',
        'loadMore': 'Показать еще',
        'seen': 'Просмотрено',
        'like': 'Лайк',
        'compare': 'Сравнить',
        'sliderInfo': 'Включить слайдер под указателем мыши',
        'delivery': 'Включить доставку',
        'protection': 'Включить безопасную сделку',
        'sliderPictures': [
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
        ],
        'currency': '₽',
        'controlState': {
          'like': false,
          'compare': false,
        },
      },
    }
  }

  _onChangeStyle(defaultValue, element) {
    return (e) => {
      (defaultValue !== e.target.value) ? (
        element.current.classList.add('promo-creation__field--selected')) : (
        element.current.classList.remove('promo-creation__field--selected'));
    }
  }

  _onFocus(element) {
    return (e) => {
      element.current.classList.add('promo-creation__field--selected');
    }
  }

  _onBlur(defaultValue, element) {
    return (e) => {
      if (!e.target.value) {
        element.current.classList.remove('promo-creation__field--selected');
        return;
      }

      if (e.target.value !== defaultValue) {
        return;
      }

      element.current.classList.remove('promo-creation__field--selected');
    }
  }

  _onChangeField(callback, prevState, maxLength) {
    return (e) => {
      const value = e.target.value;
      if (maxLength && value.length > maxLength) {
        callback({ ...prevState, 'attention': true });
        return;
      }
      callback({ 'value': value, 'attention': false })
    }
  }

  _onCheck(valueCallback, prevState, field) {
    return (e) => {
      valueCallback({ ...prevState, [field]: e.target.checked });
    }
  }

  get state() {
    return this.#state;
  }
}

const store = new Store();

export { store }
