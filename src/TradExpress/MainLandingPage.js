import React from 'react'
import LandingPage from './LandingPage';
import LandingPage2 from './LandingPage2';
import LandingPage3 from './LandingPage3';
import LandingPage4 from './LandingPage4';
import LandingPage5 from './LandingPage5';
import LandingPage6 from './LandingPage6';
import Apis from '../Apis';


const MainLandingPage = () => {
  return (
    <div>
      <LandingPage />
      <Apis />
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
      <LandingPage6 />
    </div>
  )
}

export default MainLandingPage