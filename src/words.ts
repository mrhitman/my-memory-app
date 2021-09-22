import chance from "chance";

export interface Word {
  index: number;
  text: string;
  url: string;
}

export const getRandomWord = (min: number, max: number) => {
  return chance().pick(
    words.slice(min < max ? min - 1 : 0, max || words.length)
  );
};

export const words: Word[] = [
  {
    index: 1,
    text: "Еж",
    url: "hedgehog.jpg",
  },
  {
    index: 2,
    text: "Еда",
    url: "food.jpg",
  },
  {
    index: 3,
    text: "Око",
    url: "eye.jpg",
  },
  {
    index: 4,
    text: "Щи",
    url: "cabbage-soup.jpg",
  },
  {index: 5, text: "Обои", url: "wallpaper.jpg"},
  {
    index: 6,
    text: "Шея",
    url: "neck.jpg",
  },
  {
    index: 7,
    text: "Оса",
    url: "wasp.jpg",
  },
  {
    index: 8,
    text: "Ива",
    url: "willow.jpg",
  },
  {
    index: 9,
    text: "Яйцо",
    url: "egg.jpg",
  },
  {
    index: 10,
    text: "Огонь",
    url: "fire.jpg",
  },
  {
    index: 11,
    text: "Гага",
    url: "eider-duck.jpg",
  },
  {
    index: 12,
    text: "Гад",
    url: "snake.jpg",
  },
  {
    index: 13,
    text: "Жук",
    url: "bug.jpg",
  },
  {
    index: 14,
    text: "Гущя",
    url: "thick.jpg",
  },
  {
    index: 15,
    text: "Губы",
    url: "lips.jpg",
  },
  {
    index: 16,
    text: "Игла",
    url: "needle.jpg",
  },
  {
    index: 17,
    text: "Гусь",
    url: "gusy.jpg",
  },
  {
    index: 18,
    text: "Агава",
    url: "agave.jpg",
  },
  {
    index: 19,
    text: "Гора",
    url: "mountain.jpg",
  },
  {
    index: 20,
    text: "Дом",
    url: "house.jpg",
  },
  {
    index: 21,
    text: "Дуга",
    url: "arc.jpg",
  },
  {
    index: 22,
    text: "Дед",
    url: "grand.jpg",
  },
  {
    index: 23,
    text: "Дух",
    url: "spirit.jpg",
  },
  {
    index: 24,
    text: "Дочь",
    url: "girl.jpg",
  },
  {
    index: 25,
    text: "Дуб",
    url: "oak.jpg",
  },
  {
    index: 26,
    text: "Душ",
    url: "shower.jpg",
  },
  {
    index: 27,
    text: "Утес",
    url: "cliff.jpg",
  },
  {
    index: 28,
    text: "Дева",
    url: "virgo.jpg",
  },
  {
    index: 29,
    text: "Тур",
    url: "bull.jpg",
  },
  {
    index: 30,
    text: "Конь",
    url: "horse.jpg",
  },
  {
    index: 31,
    text: "Кожа",
    url: "skin.jpg",
  },
  {
    index: 32,
    text: "Кот",
    url: "cat.jpg",
  },
  {
    index: 33,
    text: "Хек",
    url: "heck.jpg",
  },
  {
    index: 34,
    text: "Кущя",
    url: "https://avatars.mds.yandex.net/get-zen_doc/1040957/pub_5d46880906cc4600b03e5176_5d468811fbe6e700adf3fad1/scale_1200",
  },
  {
    index: 35,
    text: "Куб",
    url: "cube.jpg",
  },
  {
    index: 36,
    text: "Укол",
    url: "https://fb.ru/misc/i/thumb/a/3/2/0/7/5/7/4/3207574.jpg",
  },
  {
    index: 37,
    text: "Коса",
    url: "scythe.jpg",
  },
  {
    index: 38,
    text: "Кофе",
    url: "coffee.jpg",
  },
  {
    index: 39,
    text: "Кора",
    url: "bark.jpg",
  },
  {
    index: 40,
    text: "Чума",
    url: "https://images11.popmeh.ru/upload/img_cache/f0e/f0e3d1efe75e2de5e155d09930e52659_ce_465x465x148x114_cropped_800x800.jpg",
  },
  {
    index: 41,
    text: "Очаг",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLAKcluP3akLvPZFZyJ-iKW8STRlXxVgz6g&usqp=CAU",
  },
  {
    index: 42,
    text: "Щит",
    url: "shield.jpg",
  },
  {
    index: 43,
    text: "Очки",
    url: "glasses.jpg",
  },
  {
    index: 44,
    text: "Чаща",
    url: "forest.jpg",
  },
  {
    index: 45,
    text: "Чип",
    url: "chip.jpg",
  },
  {
    index: 46,
    text: "Чаша",
    url: "bowl.jpg",
  },
  // {
  //   index: 47,
  //   text: "",
  //   url: ""
  // },
  // {
  //   index: 48,
  //   text: "",
  //   url: ""
  // },
  // {
  //   index: 49,
  //   text: "",
  //   url: ""
  // },
  // {
  //   index: 49,
  //   text: "",
  //   url: ""
  // }
];
