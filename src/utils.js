const MINUTES_IN_HOUR = 60;

export const formatRunTime = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / MINUTES_IN_HOUR);
  const minutes = timeInMinutes - MINUTES_IN_HOUR * hours;
  return `${hours ? hours.toString() + `h` : ``} ${minutes ? minutes.toString() + `m` : ``}`;
};

export const getFilmRatingLevel = (rating) => {
  switch (true) {
    case (rating > 0 && rating <= 3):
      return `Bad`;
    case (rating > 3 && rating <= 5):
      return `Normal`;
    case (rating > 5 && rating <= 8):
      return `Good`;
    case (rating > 8 && rating < 10):
      return `Very good`;
    case (rating === 10):
      return `Awesome`;
    default:
      return ``;
  }
};


