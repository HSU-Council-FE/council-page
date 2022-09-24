import React from 'react'
import '../../App.css';
import Banner from '../Banner'
import Footer from '../Footer'
import Summary_pages from './../Summary_pages';
import HSU_pages from './../HSU_pages';
import Cards from '../Cards';


function Main(){
    return(
        <>
        <Banner/>
        <Summary_pages/>
        <HSU_pages/>
        <Cards/>
        <Footer />
        </>
    );
}

export default Main;