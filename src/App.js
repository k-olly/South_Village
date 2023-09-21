import React from 'react';
import NavBar from './Components/navbar';
import Header from './Components/header';
import MainSection from './Components/main';
import FirstBlockImages from './Components/first-image-block';
import Quotation from './Components/quotation';
import SecondBlockImages from './Components/second-image-block';
import EndingSection from './Components/ending-section';

export default function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <MainSection/>
      <FirstBlockImages/>
      <Quotation/>
      <SecondBlockImages/>
      <EndingSection/>
    </>
  )
};


