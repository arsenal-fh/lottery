// 奖品类型定义
var prizeTypes = {
  SCIENCE_MODEL: {
    name: '科学模型',
    probability: 0.10,  // 10%
    image: 'special.jpg',
    boxUrl: 'img/b1.jpg'
  },
  STATIONERY_BOX: {
    name: '文具盲盒',
    probability: 0.20,  // 20%
    image: 'stationery.jpg',
    boxUrl: 'img/b2.jpg'
  },
  TOY_BOX: {
    name: '玩具盲盒',
    probability: 0.50,  // 50%
    image: 'misterybox.jpg',
    boxUrl: 'img/b3.jpg'
  },
  PARTICIPATION: {
    name: '参与奖',
    probability: 0.20,  // 20%
    image: 'jiayou.png',
    boxUrl: 'img/b4.jpg'
  }
};

// 生成足够数量的奖品池，每个奖品有对应的概率权重
var member = [
  // 科学模型 - 10% (10个)
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-1',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-2',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-3',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-4',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-5',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-6',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-7',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-8',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-9',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  {
    "phone": "special.jpg",
    "name": "科学模型",
    'boxUrl': 'img/b1.jpg',
    'key': 'science-10',
    'prizeType': 'SCIENCE_MODEL',
    'probability': 0.10
  },
  // 文具盲盒 - 20% (20个)
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-1',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-2',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-3',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-4',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-5',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-6',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-7',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-8',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-9',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-10',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-11',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-12',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-13',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-14',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-15',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-16',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-17',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-18',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-19',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  {
    "phone": "stationery.jpg",
    "name": "文具盲盒",
    'boxUrl': 'img/b2.jpg',
    'key': 'stationery-20',
    'prizeType': 'STATIONERY_BOX',
    'probability': 0.20
  },
  // 玩具盲盒 - 50% (50个)
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-1',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-2',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-3',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-4',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-5',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-6',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-7',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-8',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-9',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-10',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-11',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-12',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-13',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-14',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-15',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-16',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-17',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-18',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-19',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-20',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-21',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-22',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-23',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-24',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-25',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-26',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-27',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-28',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-29',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-30',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-31',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-32',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-33',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-34',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-35',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-36',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-37',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-38',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-39',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-40',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-41',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-42',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-43',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-44',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-45',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-46',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-47',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-48',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-49',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  {
    "phone": "misterybox.jpg",
    "name": "玩具盲盒",
    'boxUrl': 'img/b3.jpg',
    'key': 'toy-50',
    'prizeType': 'TOY_BOX',
    'probability': 0.50
  },
  // 参与奖 - 20% (20个)
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-1',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-2',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-3',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-4',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-5',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-6',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-7',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-8',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-9',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-10',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-11',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-12',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-13',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-14',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-15',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-16',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-17',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-18',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-19',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  },
  {
    "phone": "jiayou.png",
    "name": "参与奖",
    'boxUrl': 'img/b4.jpg',
    'key': 'participation-20',
    'prizeType': 'PARTICIPATION',
    'probability': 0.20
  }
];
/*

var member = [
  {
    "phone": "1flower.jpg",
    "name": "一朵太阳花",
    'boxUrl': 'img/b5.jpg',
    'key': 'gift5'
  },
  {
    "phone": "1flower.jpg",
    "name": "一朵太阳花",
    'boxUrl': 'img/b5.jpg',
    'key': 'gift5-2'
  },
  {
    "phone": "1flower.jpg",
    "name": "一朵太阳花",
    'boxUrl': 'img/b5.jpg',
    'key': 'gift5-3'
  },
  {
    "phone": "2flowers.jpg",
    "name": "两朵太阳花",
    'boxUrl': 'img/b6.jpg',
    'key': 'gift6'
  },
  {
    "phone": "2flowers.jpg",
    "name": "两朵太阳花",
    'boxUrl': 'img/b6.jpg',
    'key': 'gift6-2'
  },
  {
    "phone": "3flowers.jpg",
    "name": "三朵太阳花",
    'boxUrl': 'img/b7.jpg',
    'key': 'gift7'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-1'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-2'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-3'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-4'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-5'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-6'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-7'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-8'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-9'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-10'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-11'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-12'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-13'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-14'
  },
  {
    "phone": "1lollipop.jpg",
    "name": "一颗糖",
    'boxUrl': 'img/b8.jpg',
    'key': 'gift10-15'
  },
  {
    "phone": "2lollipops.jpg",
    "name": "两颗糖",
    'boxUrl': 'img/b9.jpg',
    'key': 'gift11'
  },
  {
    "phone": "2lollipops.jpg",
    "name": "两颗糖",
    'boxUrl': 'img/b9.jpg',
    'key': 'gift11-2'
  },
  {
    "phone": "2lollipops.jpg",
    "name": "两颗糖",
    'boxUrl': 'img/b9.jpg',
    'key': 'gift11-3'
  },
  {
    "phone": "3lollipops.jpg",
    "name": "三颗糖",
    'boxUrl': 'img/b10.jpg',
    'key': 'gift12-1'
  },
  {
    "phone": "3lollipops.jpg",
    "name": "三颗糖",
    'boxUrl': 'img/b10.jpg',
    'key': 'gift12-2'
  },
  {
    "phone": "3lollipops.jpg",
    "name": "三颗糖",
    'boxUrl': 'img/b10.jpg',
    'key': 'gift12-3'
  },
  {
    "phone": "3lollipops.jpg",
    "name": "三颗糖",
    'boxUrl': 'img/b10.jpg',
    'key': 'gift12-4'
  },
  {
    "phone": "bagOfSugar.jpg",
    "name": "一包糖",
    'boxUrl': 'img/b12.jpg',
    'key': 'gift14'
  },
  {
    "phone": "misterybox.jpg",
    "name": "特别奖",
    'boxUrl': 'img/b10.jpg',
    'key': 'gift16-1'
  },
];
*/
