import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import MyButton from './../button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    let logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <div>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            </div>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar