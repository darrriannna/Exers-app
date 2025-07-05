import { Navbar, Main, Footer, HeroHome} from "../components";
import React from 'react'; 

import '../styles/index.css';

function Home() {

  return (
    <>

        <div className="body">
      <Navbar />
      <div className="home-parent">

<HeroHome/>
    
</div>
      <Main />
      <Footer /></div>

    </>
  )
}

export default Home