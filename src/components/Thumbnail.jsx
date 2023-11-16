import PropTypes from 'prop-types';
import '../assets/styles/Thumbnail.css';

export default function Thumbnail({ title, urlToImage, source }) {
  return (
    <div className='Thumbnail'>
      <div className='Thumbnail-image-wrapper'>
        <img className='img-fluid' src={urlToImage} alt={title} />
        <div className='Thumbnail-category-wrapper'>
          <p>{source.name}</p>
        </div>
      </div>
      <p className='Thumbnail-title'>{title}</p>
    </div>
  );
}

Thumbnail.propTypes = {
  title: PropTypes.string,
  source: PropTypes.object,
  urlToImage: PropTypes.string,
};
