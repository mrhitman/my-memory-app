import chance from "chance";

export interface Word {
  index: number;
  text: string;
  url: string;
}

export const getRandomWord = (min: number, max: number) => {
  return chance().pick(words.slice(min < max ? min - 1 : 0, max || words.length));
};

export const words: Word[] = [
  {
    index: 1,
    text: "Еж",
    url: "https://st4.depositphotos.com/4350129/23938/i/600/depositphotos_239381082-stock-photo-little-cartoon-hedgehog.jpg"
  },
  {
    index: 2,
    text: "Еда",
    url:
      "https://zozhnik.ru/wp-content/uploads/2019/02/tomato-chicken-basil-2.jpg"
  },
  {
    index: 3,
    text: "Око",
    url:
      "https://images11.popmeh.ru/upload/img_cache/9d3/9d315361981a4e98a96be07e2a856114_ce_379x379x94x0_cropped_800x800.jpg"
  },
  {
    index: 4,
    text: "Щи",
    url:
      "https://img.povar.ru/main/e3/2c/0c/b2/shi_s_bolgarskim_percem-66314.jpg"
  },
  { index: 5, text: "Обои", url: "https://images.izi.ua/6019724" },
  {
    index: 6,
    text: "Шея",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    index: 7,
    text: "Оса",
    url: "https://thumbs.dreamstime.com/b/%D0%BE%D1%81%D0%B0-93365685.jpg"
  },
  {
    index: 8,
    text: "Ива",
    url:
      "https://baltiya-garden.ru/images/plants/leestvennye_derevia/iva/and2.jpg"
  },
  {
    index: 9,
    text: "Яйцо",
    url:
      "https://medialeaks.ru/wp-content/uploads/2019/01/47692668_1958135090974774_6762833792332802352_n.jpg"
  },
  {
    index: 10,
    text: "Огонь",
    url: "https://static.make.ua/catalog/40/fire-009__1452610510__615.jpg"
  },
  {
    index: 11,
    text: "Гага",
    url: "https://www.graycell.ru/picture/big/gaga2.jpg"
  },
  {
    index: 12,
    text: "Гад",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP4_VNXpcJloYIgMmf47jio7-XwMCO5dodIgmPtIqLrYMf2Pjb"
  },
  {
    index: 13,
    text: "Жук",
    url: "http://www.tepid.ru/animals-3/images/lucanus-cervus-2.jpg"
  },
  {
    index: 14,
    text: "Гущя",
    url: "https://www.graycell.ru/picture/big/guscha.jpg"
  },
  {
    index: 15,
    text: "Губы",
    url:
      "https://s1.tchkcdn.com/g-6XZATC19m2YuWC7jhbTYCg/13/577492/660x495/r/0/710_f3ae992a3307fc03d162247df1481059.jpg"
  },
  {
    index: 16,
    text: "Игла",
    url:
      "https://png.pngtree.com/png-clipart/20190611/original/pngtree-cartoon-sewing-needle-png-image_3214901.jpg"
  },
  {
    index: 17,
    text: "Гусь",
    url:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEg0SExARDxENEBUVFRMWDREXExgTFRIWFxcSFhUZHSggGBolGxUVIjEhJSktLy4uFx8zODMsNygtLisBCgoKDQ0OGg8QGC4lHyYtLTI3Ly4xNC0wNTE3LisxLTUrLTE1NS8tOC01KysrLysuKys3LSstNSsrKy0rLS03K//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQMEBQYCB//EADwQAAIBAgIIAgcHAgcBAAAAAAABAgMRBCEFEjFBUWFxgZGhBhMiMlKx0RQjQpLB4fAHcjNDYoOUovEk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEEAwL/xAAhEQEAAgICAQUBAAAAAAAAAAAAAQIDEQQhQRIUMTJhIv/aAAwDAQACEQMRAD8A/cQAAAAAAACFAEBSAAUAQAACgACAoEKAAIUACFIAKQoEBQBCgAAAAAMVavGCvJpIDKa2Mx1Okrzko91c8l6S+mGrCccPKCls13JWv12Lrn0PCV/SHJ+snCpUle8oubXjNtv+WSMWflxTqvbdh4Vram/T9Mh6ReujKVGLkoycb9Ertcs/I8/oD01eJrV6Ko1oSoJttwajlLVs96fU3PRLUhhqCjLW105trY3NuTXa9ux6CMk9yXSxpxzM1iZ+dMmWKxaYiOtvrD4ye15cmdHD11Lqc2crbvIUq+d1uez+bjo5uwD5pzuk+J9BQAAAABCgAAAAAAAAAAABCgAAAAAAA5emNCQxOprzrQ9WpJerq6vvWzeWezpm+VuoCTET1KxMx3DwmM/pdhJ3frsQpN3vKVKafVOB57F/0nlGT1J0alN7bYaMaq5W1rPrfsfrgOU4Mc+HWORkjy/OcPBUI06UYuCoxUVHV1bW36vPadHDaQfM9hXw0Jq04RmucUzg6W0LGEXOm3FK14ttqzdrpvPf4HTWnLbTnjW97Zlw9e9ty+K+/maCov8AFbN2tvTaeT8mbNB2va72Oz+F7VfeVHpNGzvFrfH9eBuHJ0RL2pLdq/Q6xQAAAAAQoAAhQAAAEKAAIUAQFAEAKABCgAAAAAAwY6GtTqLjF/IzmOv7sv7X8gPJOCTtv1kr84xumSm72eat7MktnL5mbERz25t3XWKv5mOD2tZOW3+5bU/5uIOpoiXtrnFrvw/U7h53RUvvIc/oz0RQBABQQAUEAFBABQQAUEAFBABQQACkKBAUAAAAAAAx4j3Zf2v5GQwYyVovnkB57ERzXG+X6mtLK742v9fkbdVXb8Ua0l4kG1op/eQ6/U9Kec0NH7yPd+TPRlAAAAAAAAERQABCgAAAAAAAACFAAAAAAAAAAHO0nPNR4HRONi6l5y628MgNWpE12lc2po15EG5oyP3kO/yZ3Tz+DnZxe2zPQFAAAAAAAAAAAAAAAAAAAAABCkKBACgQoAEZQAPmcrJvgrnDlLadXSM7U5+HizjRkBZMwVEZmzHKJApXTWTfY9BHEJpM4NK6M6qvmUdn1pHUfDzOXCublKuBsesfA+lMwrER4n2qiZBkTKYGh6623+dyjOUxqqj6jNPY14gUFAECKAIAUCAoAhSFAAAAAAAAA09Lf4Uuq+Zw6cjvaThelUX+m/hn+h5ykwNtRMipHzSZsRIMDjYwzn4G/OKa/c1auHazj7S4b0B8vZxFPFWMPrHseXY+amHk842fH+bwNudW+a75loVb7NpioUpdO5m1c88nyQGZ1ZrYmz4p6STvGStJbmtvNH1Gey7PuSjJWlnzyA+vs2tnCrKnyVnH6+Z8SwdZZxqKXX90zA6UoO8Xl3cX22rzNiGkbZSWrzTvH9gMbxten79HWS3xl/6kZaWmoP3oyh1WXijap4hPYxKEJbYxfZAfdLGU5bJxfczJnDxOj4Xyoyz3waXzZ84bXi7erk48bWl4xlYDvg0adSXF24Saf1fmZaU5trY49CjZAAAAAAQoAAAAABGr9zyVWGpKcfhk12TyPXHn9P4Zxl6xL2ZWUuT2J9GBgp1DNGqc6NUyQqEHQVQzU5mlCojMkBuSpxltipds/Ew1MK1nBXXC6uWnIzqT3AaE047YuN9+7xMevxd/mjqTp6ys32ucTSGCnDOKco8twG0mXWfGxyYRr/C0uqNilTqcQN6WJtkzQxGJ3K7fmZvsUn70rclmbFLDqKyS/UDmUVWTuotX528UdOhXn+LV/MY6tRrua0pcvFgdhYtJZvsszD9tk3aEE2+LbfhlY08Lh5VHZd3uXc9BhMJGmrLa9r3sD4wmHks5y1n8KSUV9WbRQUAABACgAAAAAAAAD5qQUk00mmrNPZY+gB5LSujJUm5RvKnx3x5PlzNOnVPcNHIx+goSu4fdy4fhfbd2IOPRqrebtKaOTi8PUpO04tcHufRloYrmB3IvmZ4dTl0cSt5t06gG5GpxZ9OZres6M+lO/ICVcujMUmu4r4lLaa0a6fHwAzuqjG63D5BWCaA+LX94s6cVuzNjDYJ1NZ31UnlltfidDD6PUWm3rNbMsgMmAoakEt7zfVmyAUAAAAAEBQABABQAAAAAhQAAAHxUpqSaklJPamro4mM9GoNt05Om/h2x+q8zvAD8/qQqU201sdmZaWLe/I9PpbR6lepG6nFZrdJLdbiecr04tbLEGeGO6ZGR45HJhQlnwMM6rUkpKUUuKaT5q4HZjHXesz6nTtx8TSw+NXE6WGw1Spsi0uMlZfv2A1PWvmdDR+DnUs7uMOPHkvqdTC6Kpxza15cWsuyN5ASEEkklZLYilBQAIBQAABAABQBCgAAAAAAAAAQoAAAADxvp3WjhKcK6hKUalaNOai17KmpWmlvzSVuZ7I/Pv6z4i2Ew9PfVxCbXGMISv5ygc8tvTSbPeOvqtEODhNO1pVqUdWMabnHa85Jy2eGV/wCL9et4H4v6M0pVMRgVf/Mg9vwyUmuP4X5H7SceLltkrNpd+VirjmIhLAoNTKhQABGUAQoAAhQBAUAQoAAAAAAAAAAAAAAAB530p9IVhox1J0ZVdZXpS1pT1XvSi8u5wI+n1e2WFjPL43DPvc52y0rOpl1rhvaNxD9BPyH+rGOVTExpJ5YWlb/cqe01+VUzoYj0/wAelJrC4dKKvtnJ26Kaufn9bEVK1adWrtxVZy91pZtydk87JWSvuS6mPk5ovTVWvjYLVvuz2XobD/7MGtlm/wDrTl9D9cPx3CVPs9fD1VkoTTbvlbZJflbP2FO574PVJj9Tnx/cT+KADawAAAAAAAAAAAAACFIABQAAAAAAAQoAhSFA5OlMJhoRqVZ4WnVteUrYenKT2tt3XmeC0jpChXitWjSoOMrqdOEbONslKOx7e24/Uzn43QmGqu9TD0py+J01r/mWfmcslLW+JdsWStftG35VKjC1tZPvmc/FwoJxcpx9l5XhrZ2tZWz8z9TqehOBe2hL/lYlfKZvaP0BhaDUqWHpwlFWU9W80t6U5XfmZfa3me5hs95jiOqzt+V4XF0688NQbl97VgvYac9RyUW1t43P1vQ2BdChRouo6rowUddqzaWzK73fI2adGMb6sYx1ttopX622mQ0YcMY4Zc+ecvjSApDuzqQFAERSAAAABQBAAAAKBCgAQAAUAAAAAAAAMACMAAUAAQAAGUAARlAEKAAAAEAAAAAf/9k="
  },
  {
    index: 18,
    text: "Агава",
    url:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/sbc5898bfafab75ef/image/ic3fc75916d515e68/version/1427122050/%D0%B0%D0%B3%D0%B0%D0%B2%D0%B0-%D0%B2%D1%8B%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%83%D1%85%D0%BE%D0%B4.jpg"
  },
  {
    index: 19,
    text: "Гора",
    url:
      "https://karpaty.rocks/sites/default/files/styles/photo_object/public/photo/history/gora_malyy_gorgan_0.jpg?itok=CdpCmqID"
  },
  {
    index: 20,
    text: "Дом",
    url:
      "https://domnlk.ru/wp-content/uploads/2016/08/270-%D0%BA%D0%B2%D0%BC-%D0%9E%D1%81%D0%BE%D0%B1%D0%BD%D1%8F%D0%BA_%D1%84%D0%BE%D1%82%D0%BE.jpg"
  },
  {
    index: 21,
    text: "Дуга",
    url: "https://bi.ua/uploaded-images/products/size_400/483735_1.jpg"
  },
  {
    index: 22,
    text: "Дед",
    url: "https://images.ua.prom.st/1841893011_w640_h640_ded-moroz-v.jpg"
  },
  {
    index: 23,
    text: "Дух",
    url: "https://www.stihi.ru/pics/2018/01/08/12419.jpg"
  },
  {
    index: 24,
    text: "Дочь",
    url:
      "https://avatars.mds.yandex.net/get-zen_doc/1886085/pub_5df978775fd55f00ada59495_5df9796f0ce57b00aedc6859/scale_1200"
  },
  {
    index: 25,
    text: "Дуб",
    url:
      "https://ds04.infourok.ru/uploads/ex/1084/000dcc23-e420ba77/hello_html_1dc893.jpg"
  },
  {
    index: 26,
    text: "Душ",
    url:
      "https://moyavanna.com/wp-content/uploads/2016/09/71eUSQRYsVL._SL1000_.jpg"
  },
  {
    index: 27,
    text: "Утес",
    url:
      "https://bigartshop.ru/sites/default/files/styles/1920x/public/product_images/Cliffs--1904.jpg?itok=TAy87ELT"
  },
  {
    index: 28,
    text: "Дева",
    url:
      "https://prodetki.com/wp-content/uploads/2019/09/Deva-e1567340108841.jpg"
  },
  {
    index: 29,
    text: "Тур",
    url:
      "https://thumbs.dreamstime.com/b/primigenius-%D0%B1%D1%8B%D0%BA%D0%B0-%D1%82%D1%83%D1%80-48493043.jpg"
  },
  {
    index: 30,
    text: "Конь",
    url: "https://www.proza.ru/pics/2014/02/22/1829.jpg"
  },
  {
    index: 31,
    text: "Кожа",
    url:
      "https://otvet.imgsmail.ru/download/214585937_f848e8b9c2fbf6aad74b3c5eadc81344_800.jpg"
  },
  {
    index: 32,
    text: "Кот",
    url:
      "https://i.pinimg.com/originals/54/b0/04/54b004226078f3667bf535ae6c769ab7.jpg"
  },
  {
    index: 33,
    text: "Хек",
    url:
      "https://fishmarket.com.ua/image/cache/ab56982f574b6c03800053103bad032b.jpg"
  },
  {
    index: 34,
    text: "Кущя",
    url:
      "https://avatars.mds.yandex.net/get-zen_doc/1040957/pub_5d46880906cc4600b03e5176_5d468811fbe6e700adf3fad1/scale_1200"
  },
  {
    index: 35,
    text: "Куб",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    index: 36,
    text: "Укол",
    url: "https://fb.ru/misc/i/thumb/a/3/2/0/7/5/7/4/3207574.jpg"
  },
  {
    index: 37,
    text: "Коса",
    url:
      "https://akvilon.ua/content/images/46/productkosa-serpan-zayka-84281343250709.jpg"
  },
  {
    index: 38,
    text: "Кофе",
    url:
      "https://m.aromisto.com.ua/files/filemanager/images/photo-articles/kofe-espresso.jpg"
  },
  {
    index: 39,
    text: "Кора",
    url:
      "https://www.aduvan.ru/wp-content/uploads/photo-gallery/barktree-texturs/barktree-(1).jpg"
  },
  {
    index: 40,
    text: "Чума",
    url:
      "https://images11.popmeh.ru/upload/img_cache/f0e/f0e3d1efe75e2de5e155d09930e52659_ce_465x465x148x114_cropped_800x800.jpg"
  }
];
