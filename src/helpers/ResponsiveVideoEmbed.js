/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from 'react';
import ReactPlayer from 'react-player';
export default ({ url, background = 'black', className = 'video' }) => {
  return (
    <ReactPlayer
      url={url}
      playing
      controls
      light={
        'https://firebasestorage.googleapis.com/v0/b/nlg-images.appspot.com/o/thumbnail.png?alt=media&token=cb7ad0df-ee59-4cb5-8315-73180c723e95&_gl=1*8ntonu*_ga*MTU4NzY2OTQyNC4xNjk2MjE4MzQz*_ga_CW55HF8NVT*MTY5ODM4NTQwMS4zMC4xLjE2OTgzODU0OTYuMjguMC4w'
      }
    />
  );
};
