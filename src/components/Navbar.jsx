import { useState } from 'react';
import burgerBtn from '../assets/menu-btn.svg';
import seachBtn from '../assets/search.svg';
import '../assets/styles/Navbar.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen((opening) => !opening);
  }

  return (
    <nav className='Navbar navbar navbar-expand-md'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          LOGO
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <img className='Navbar-burger' src={burgerBtn} alt='navbar menu button' />
        </button>
        <div className='collapse navbar-collapse justify-content-md-end' id='navbarNav'>
          <ul className='navbar-nav align-items-md-center'>
            <li className='nav-item align-self-center'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className={`nav-item${isOpen ? ' move-to-left' : ''}`}>
              <form className='nav-link search-box d-flex d-block-lg' action='#' method='post'>
                <span className={`search-icon${isOpen ? ' search-icon-open' : ''} d-none d-lg-block`} onClick={handleClick}>
                  <img src={seachBtn} alt='Search' />
                </span>
                <input type='text' name='search-bar' className={`search-bar${isOpen ? ' search-bar-open' : ''}`} />
                <span className='search-icon d-inline-block d-lg-none'>
                  <img src={seachBtn} alt='Search' />
                </span>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
