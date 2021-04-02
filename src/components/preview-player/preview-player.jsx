import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const PreviewPlayer = ({isPlaying, src, poster}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying, src]);

  return (
    <video
      height="175"
      muted
      poster={poster}
      ref={videoRef}
      src={src}
      width="280" />
  );
};

PreviewPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default PreviewPlayer;
