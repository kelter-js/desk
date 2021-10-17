import React, { useState } from 'react';
import { RenderPhoto } from './render-photo.js';

const PhotoList = (props) => {
  const [photos, photoListUpdater] = useState(props.photos);

  const onLoad = (reader) => {
    return () => {
      const result = reader.result;
      const photoList = photos.slice();
      photoList.push(result);
      photoListUpdater(photoList);
    }
  }

  const removePhoto = (index) => {
    return () => {
      const photoList = photos.slice(0, index).concat(photos.slice(index + 1));
      photoListUpdater(photoList);
    }
  }

  const createReader = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', onLoad(reader));
  }

  const onChange = (e) => {
    const photo = e.target.files[0];
    const photoName = photo.name.toLowerCase();
    const formatCorrect = props.types.some((name) => photoName.endsWith(name));

    if (formatCorrect) {
      createReader(photo);
    }
  }

  return (
    <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required'>
      <p className='promo-creation__label promo-creation__label--photo'>
        {props.fieldName}
      </p>
      <div className='promo-creation__photo-wrapper'>
        {<RenderPhoto
          photos={photos}
          remove={removePhoto}
          rotateText={props.rotateText}
          deleteText={props.deleteText}
          rotate={props.rotate}
        />}
        <input
          type='file'
          id='item-photo'
          name='item-photo'
          className='promo-creation__load-photo'
          onChange={onChange}
        />
        <label className='promo-creation__label-photo' htmlFor='item-photo'>
          {props.photoButton}
        </label>
      </div>
    </div>
  );
}

export { PhotoList }
