import React from 'react'
import Header from './Header';
import FeaturedNews from './FeaturedNews';
import RecentlyNews from './RecentlyNews';

const MainApp = () => {
    return (
        //React Fragment -> feature of react that allow me to return multiple component without adding extra node to DOM
        <>
            <Header />
            <FeaturedNews />
            <RecentlyNews/>
        </>
    )
}

export default MainApp;
