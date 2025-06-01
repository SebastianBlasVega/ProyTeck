import React,{useState} from 'react';
import imgFacebook from '../assets/img/facebook.png';
import imgInstagram from '../assets/img/instagram.png';
import imgTwitter from '../assets/img/x.png';

const Header = () => {
    return (
        <header>
        <div className="encabezado">
            <a href="index.html"><h1>Logo</h1></a>
            <input type="text" name="buscar" id="buscar" placeholder="Buscar Productos" />
            <div class="redes">
                <a href="#"><img src={imgFacebook} alt="Facebook" height="40px"/></a>
                <a href="#"><img src={imgInstagram} alt="Instagram" height="40px"/></a>
                <a href="#"><img src={imgTwitter} alt="Twitter" height="40px"/></a>
            </div>
        </div>
        </header>
    );
};

export default Header;
