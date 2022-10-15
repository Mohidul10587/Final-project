import React from 'react';
import Banner from'./Banner'
import Info from './Info'
import Services from './Services'
import Card from './Card'
import MakeAppointment from './MakeAppointment';
import Testmonials from './Testmonials';
import ContactForm from './ContactForm';

const Home = () => {
    return (  
    <>
       <Banner />
       <Info />
       <Services />
       <Card/>
       <MakeAppointment />
       <Testmonials></Testmonials>
       <ContactForm></ContactForm>
    </>
    );
}

export default Home;
