import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{ background: '#fff321' }}>
      <div className='container-fluid'>
        <img src="../src/assets/logo.jpg" alt="logo" className='navbar-brand' />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/#banner">
                Banner
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/#category">
                Category
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/#search">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
