import PropTypes from 'prop-types';

import '../assets/styles/Header.css';

export default function Header({ subtitle }) {
  return (
    <header className='Header'>
      <h2 className='Header-title font-semi-bold'>News</h2>
      {subtitle && <p className='Header-subtitle'>{subtitle}</p>}
    </header>
  );
}

Header.propTypes = {
  subtitle: PropTypes.string,
};
