import React from 'react';
import '../modules/NavBarCss.css';

export default function NavBar (){
    return (
        <nav>
                <a href="/">Home </a> 
                <a href="/about">About </a>
                <a href="/shoppinglist">Shopping List </a>
        </nav>
    );
}

