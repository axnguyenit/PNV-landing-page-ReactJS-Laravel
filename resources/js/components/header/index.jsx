import React from 'react';

const Header = (props ) => {
    let className = "navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header fixed-header";
    if (props.preview === true) {
        className = "navbar navbar-inverse navbar-expand-lg header-nav light-header fixed-header"
    }
    return (
        <header>
            <nav className={className}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={props.logo? props.logo: 'images/pn-logo.png'} alt="PN" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                    <i className="icofont-navigation-menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCodeply">
                    <ul className="nav navbar-nav ml-auto">
                        {
                            props.menuItems && props.menuItems.map((item, index) => <li><a className="nav-link" href={`#section_${index}`}>{item.title}</a></li>)
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;