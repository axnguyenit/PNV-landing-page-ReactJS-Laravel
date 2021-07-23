import React from 'react';

const Header = (props) => {
    return (
        <>
            <div id="preloader-wrap">
                <div className="preloader">
                    <div className="preloader-icon">
                        <img src='assets/images/pn-logo.png' alt="PN"/>
                    </div>
                </div>
            </div>
            <header>
                <nav className="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header fixed-header">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src='assets/images/pn-logo.png' alt="PN" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                            <i className="icofont-navigation-menu" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCodeply">
                            <ul className="nav navbar-nav ml-auto">
                                {
                                    props.menu && props.menu.map((item, index) => {
                                        if(item.name === 'Footer' || item.name === 'Banner' || item.name === "Video") {
                                            return '';
                                        }
                                        else if(item.name === 'Contact') {
                                            return item.show ? <li key={index}>
                                                <a className="nav-link" href="#contact">Contact</a>
                                            </li> : null;
                                        }
                                        return item.show ? <li key={index}>
                                            <a className="nav-link" href={`#${item.componentParams.title}`}>{item.componentParams.title}</a>
                                        </li> : null;
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;