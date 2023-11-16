import PropTypes from 'prop-types';
import chatIcon from '../assets/chat.svg';
import '../assets/styles/List.css';

export default function List({ title, url, description }) {
  return (
    <li className='List-item list-group-item d-flex align-items-start'>
      <img className='List-bullet' src={chatIcon} alt='chat icon image' />
      <div className='List-details'>
        <a className='List-link' href={url}>
          {title}
        </a>
        <p className='List-text'>{description}</p>
      </div>
    </li>
  );
}

List.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};
