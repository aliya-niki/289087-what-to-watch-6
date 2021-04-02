import React, {useRef, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getFilmByIdSelector} from '../../store/films/selectors';
import {convertSecondsToHHMMss, SECONDS_IN_MINUTE} from '../../utils';
import {AppRoute} from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';

const Player = () => {
  const {id} = useParams();
  const film = useSelector((state) => getFilmByIdSelector(state, id));
  const history = useHistory();
  const videoRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFullScreenClick = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullScreen) {
        videoRef.current.webkitRequestFullScreen();
      }
    }
  };

  const handleOnPlaying = () => {
    setCurrentTime(videoRef.current.currentTime);
    setProgressValue(
        ((videoRef.current.currentTime / videoRef.current.duration) * 100).toFixed(2)
    );
  };

  const handleExitClick = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.src = videoLink;

    if (history.length > 1) {
      history.goBack();
      return;
    }
    history.push(AppRoute.MAIN);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  if (!film) {
    return <NotFoundPage />;
  }

  const {videoLink, name, backgroundImage, runTime} = film;
  const durationInSeconds = runTime * SECONDS_IN_MINUTE;

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        onTimeUpdate={handleOnPlaying} />

      <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressValue} max="100" />
            <div className="player__toggler" style={{left: `${progressValue}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{convertSecondsToHHMMss(durationInSeconds - currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayPauseClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
