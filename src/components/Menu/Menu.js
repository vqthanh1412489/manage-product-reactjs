import React from 'react';
import './Menu.css';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        lable: 'Home',
        to: '/',
        exact: true
    },
    {
        lable: 'List Products',
        to: '/products',
        exact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`${active} nav-item`}>
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                    </li>
                );
            }}

        />
    );
}
class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand">Manage Products</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {this.showMenus(menus)}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

    showMenus = menus => {
        var result = null;
        if (menus.length > 0){
            result = menus.map((menu, index) => {
                return <MenuLink
                    key={index}
                    label={menu.lable}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            });
        }
        return result;
    }
}

export default Menu;


