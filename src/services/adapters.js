export const adaptDataToFilm = (data) => {
  const film = {
    ...data,
    previewImage: data[`preview_image`],
    posterImage: data[`poster_image`],
    backgroundImage: data[`background_image`],
    backgroundColor: data[`background_color`],
    videoLink: data[`video_link`],
    previewVideoLink: data[`preview_video_link`],
    scoresCount: data[`scores_count`],
    runTime: data[`run_time`],
    isFavorite: data[`is_favorite`],
  };

  delete film[`preview_image`];
  delete film[`poster_image`];
  delete film[`background_image`];
  delete film[`background_color`];
  delete film[`video_link`];
  delete film[`preview_video_link`];
  delete film[`scores_count`];
  delete film[`run_time`];
  delete film[`is_favorite`];

  return film;
};

export const adaptDataToUserInfo = (data) => {
  return ({
    id: data[`id`],
    email: data[`email`],
    name: data[`name`],
    avatarUrl: data[`avatar_url`]
  });
};
