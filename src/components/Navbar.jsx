import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        {/* {/* <nav className="navber"> */}
        <nav class='navber'>
        <div className="logo"><h1>Amr store</h1></div>
        <ul className="menu">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="New Arrivals">New Arrivals</Link></li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="/man">Man</Link></li>
            <li><Link to="women">women</Link></li>

        </ul>
        </nav>
  {/* <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style="z-index: 2000;">
    <div className="container-fluid">
      <Link className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
        <strong>MDB</strong>
      </Link>
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" aria-current="page" href="#intro">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
              target="_blank">Learn Bootstrap 5</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</Link>
          </li>
        </ul>

        <ul className="navbar-nav list-inline">
          <li className="">
            <Link className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
              target="_blank">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
          <li className="">
            <Link className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
              <i className="fab fa-github"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
        </>
    );
}

export default Navbar;
