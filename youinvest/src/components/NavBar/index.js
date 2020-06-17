import React from 'react';

import './styles.css';
import logoImg from '../../assets/chart-logo.svg';

export default function NavBar(){
    return(
        <div className="nav-container">
            <header>
                <img src={logoImg} alt="You Invest Logo" />
                <span>YOU.invest</span>
            </header>
        </div>
    )
}