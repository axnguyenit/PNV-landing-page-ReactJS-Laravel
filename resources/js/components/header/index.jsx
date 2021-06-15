import React from 'react';

const Header = () => {
    return (
        <header>
            <div id="preloader-wrap">
                <div className="preloader"></div>
            </div>
            <nav className="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header fixed-header">
                <div className="container">
                    <a className="navbar-brand logo" href="#">
                    {/* Prottasha */}
                    {/* <img src="http://www.placehold.it/150x50" alt="" /> */}
                        <img src="./assets/images/logo-pn.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                    <i className="icofont-navigation-menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCodeply">
                    <ul className="nav navbar-nav ml-auto">
                        <li>
                        <a className="nav-link" href="#home">Home</a>
                        <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icofont-rounded-down" /></span>
                        <ul className="sub-menu">
                            <li><a href>Home Option 1</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/index-01.html">Home Option 2</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/index-02.html">Home Option 3</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/index-03.html">Home Option 4</a></li>
                        </ul>
                        </li>
                        <li><a className="nav-link" href="#about">About</a></li>
                        <li><a className="nav-link" href="#causes">Causes</a></li>
                        <li><a className="nav-link" href="#donate">Donate</a></li>
                        <li><a className="nav-link" href="#gallery">Gallery</a></li>
                        <li><a className="nav-link" href="#donors">Donors</a></li> {/* active */}
                        <li><a className="nav-link" href="#volunteers">Volunteers</a></li>
                        <li>
                        <a className="nav-link" href="#blog">Blog</a>
                        <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icofont-rounded-down" /></span>
                        <ul className="sub-menu">
                            <li><a href="https://themeatelier.net/site-templates/prottasha/blog-full.html">Blog Full</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/blog-2-col.html">Blog 2 col</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/blog-3-col.html">Blog 3 col</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/single-blog.html">Single blog</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/single-left-sidebar.html">Single left sidebar</a></li>
                            <li><a href="https://themeatelier.net/site-templates/prottasha/single-right-sidebar.html">Single right sidebar</a></li>
                        </ul>
                        </li>
                        <li><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;