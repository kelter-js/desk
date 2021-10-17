import React from 'react';
import { Photo } from './photo.js';

const RenderPhoto = (props) => {
  return (
    props.photos.map((photo, index) => {
      return (
        <Photo
          src={photo}
          key={index}
          id={index}
          first={index === 0}
          remove={props.remove}
          rotateText={props.rotateText}
          deleteText={props.deleteText}
          rotate={props.rotate}
        />
      );
    })
  );
}

export { RenderPhoto }
