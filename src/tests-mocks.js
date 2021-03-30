export const filmsRaw = [{
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "preview_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "background_image": `img/bg-the-grand-budapest-hotel.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": true
}, {
  "id": 2,
  "name": `Bohemian Rhapsody`,
  "preview_image": `img/bohemian-rhapsody.jpg`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "background_image": `img/bg-the-grand-budapest-hotel.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  "description": `Freddie Mercury -- the lead singer of Queen -- defies stereotypes and convention to become one of history's most beloved entertainers.`,
  "rating": 8.5,
  "scores_count": 240,
  "director": `Bryan Singer`,
  "starring": [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  "run_time": 134,
  "genre": [`Drama`, `Biography`],
  "released": 2018,
  "is_favorite": true
}, {
  "id": 3,
  "name": `Macbeth`,
  "preview_image": `img/macbeth.jpg`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "background_image": `img/bg-the-grand-budapest-hotel.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  "description": `After a brilliant victory in battle, Macbeth returns to an indolent court where honor is dispensed by whim.`,
  "rating": 7.9,
  "scores_count": 240,
  "director": `Kit Monkman`,
  "starring": [`Mark Rowley`, `Al Weaver`, `David Bradley`],
  "run_time": 121,
  "genre": `Drama`,
  "released": 2018,
  "is_favorite": false
}];

export const filmsAdapted = [{
  id: 1,
  name: `The Grand Budapest Hotel`,
  previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: true
}, {
  id: 2,
  name: `Bohemian Rhapsody`,
  previewImage: `img/bohemian-rhapsody.jpg`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `Freddie Mercury -- the lead singer of Queen -- defies stereotypes and convention to become one of history's most beloved entertainers.`,
  rating: 8.5,
  scoresCount: 240,
  director: `Bryan Singer`,
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  runTime: 134,
  genre: [`Drama`, `Biography`],
  released: 2018,
  isFavorite: true
}, {
  id: 3,
  name: `Macbeth`,
  previewImage: `img/macbeth.jpg`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `After a brilliant victory in battle, Macbeth returns to an indolent court where honor is dispensed by whim.`,
  rating: 7.9,
  scoresCount: 240,
  director: `Kit Monkman`,
  starring: [`Mark Rowley`, `Al Weaver`, `David Bradley`],
  runTime: 121,
  genre: `Drama`,
  released: 2018,
  isFavorite: false
}];

export const authRaw = {
  "id": 1,
  "email": `keks@mail.com`,
  "name": `keks`,
  "avatar_url": `keks.jpeg`,
};

export const authAdapted = {
  id: 1,
  email: `keks@mail.com`,
  name: `keks`,
  avatarUrl: `keks.jpeg`,
};

export const user = {
  email: `keks@mail.com`,
  password: 12345678
};

export const reviews = [
  {
    id: 1,
    user: {
      id: 111,
      name: `Kate Fogler`
    },
    rating: 9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }, {
    id: 2,
    user: {
      id: 287,
      name: `Kate Muir`
    },
    rating: 6,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    date: `2019-05-08T14:13:56.569Z`
  }, {
    id: 3,
    user: {
      id: 17,
      name: `Kate Hidi`
    },
    rating: 2,
    comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    date: `2019-05-08T14:13:56.569Z`
  }, {
    id: 4,
    user: {
      id: 43,
      name: `Kate Snow`
    },
    rating: 4,
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];
