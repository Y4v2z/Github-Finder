import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}
Navbar.defaultProps = {
    icon: 'bi bi-github',
    title: "Github Finder"
}; // Bunları burada tanımlayıp yukarıda expression içinde yazılabilir. 
Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired

}//Bu kıısm ise tanımlamış olduğun property e özellik katar. Yani bu ifade string olmalı ve mutlaka yukarıda bir yerde çağrılmalı.
export default Navbar;


