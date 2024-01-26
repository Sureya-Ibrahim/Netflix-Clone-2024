import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Rows/Rowsinglelist/Row'
import Rowlist from '../../components/Rows/Rowmultiplelist/Rowlist'



const  Home=()=> {
  return (
    <>
      <Header />
      <Banner />
      <Row />
      <Rowlist />
      <Footer />
    </>
  );
}

export default Home