import React from 'react';
import { Outlet } from 'react-router-dom';
import Footter from '../Share/Footter/Footter';
import Header from '../Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footter></Footter>
        </div>
    );
};

export default Main;