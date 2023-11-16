import PropTypes from 'prop-types';
import '../assets/styles/Card.css';

export default function Card({ source, description, urlToImage }) {
  return (
    <div className='Card card'>
      <div className='Card-image-wrapper'>
        <img className='Card-image card-img-top' src={urlToImage} alt='' />
        <p className='Card-image-overlay'>{source.name}</p>
      </div>
      <div className='card-body'>
        <p className='card-text'>{description}</p>
        <a href='#' className='Card-btn btn btn-primary'>
          Read More
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  source: PropTypes.object,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
};
