import React from 'react';

const Header = (props) => {
    let className = "navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header fixed-header";
    // if (props.preview === true) {
    //     className = "navbar navbar-inverse navbar-expand-lg header-nav light-header fixed-header"
    // }
    return (
        <header>
            <div id="preloader-wrap">
                <div className="preloader"></div>
            </div>
            <nav className={className}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src='assets/images/pn-logo.png' alt="PN" />
                        {/* <img src={props.logo? props.logo: 'images/pn-logo.png'} alt="PN" /> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                    <i className="icofont-navigation-menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCodeply">
                    <ul className="nav navbar-nav ml-auto">
                        {
                            props.menu && props.menu.map((item, index) => {
                                if(item.name === 'Banner' || item.name === "Video") {
                                    return '';
                                }
                                return item.show ? <li>
                                    <a className="nav-link" href={`#${item.componentParams.title}`}>{item.componentParams.title}</a>
                                </li> : null;
                            })
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;