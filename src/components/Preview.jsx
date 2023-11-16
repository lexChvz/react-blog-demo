import PropTypes from 'prop-types';
import '../assets/styles/Preview.css';

export default function Preview({ urlToImage, publishedAt, title, source }) {
  return (
    <div className='Preview-card d-flex align-items-start'>
      <img className='Preview-thumbnail' src={urlToImage} alt='' />
      <div className='Preview-details'>
        <p className='Preview-date'>
          {new Date(publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <a className='Preview-title' href='#'>
          {title}
        </a>
        <p className='Preview-subtitle'>{source.name}</p>
      </div>
    </div>
  );
}

Preview.propTypes = {
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.object,
};
