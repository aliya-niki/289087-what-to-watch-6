import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({isPlaying, src, poster}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video src={src}
      ref={videoRef}
      poster={poster}
      muted
      width="280" height="175"
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
