import React from 'react';
import Banner from'./Banner'
import Info from './Info'
import Services from './Services'
import Card from './Card'
import Appoinment from './Appoinment';

const Home = () => {
    return (  
    <>
       <Banner />
       <Info />
       <Services />
       <Card/>
       <Appoinment />
    </>
    );
}

export default Home;
