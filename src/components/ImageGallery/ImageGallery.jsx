import React from 'react'
import PropTypes from 'prop-types';
import s from './ImageGallery.module.scss';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ items }) {
  return (
    <ul className={s.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} largeImageURL={item.largeImageURL} tags={item.tags} />
      ))}
    </ul>
  )
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }))
}

export default ImageGallery
