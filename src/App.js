import React from 'react';
import Navbar from './Header/Navbar.jsx';
import Header from './Header/Header.jsx';
import Skills from './Content/Skills.jsx';
import Projects from './Content/Projects.jsx';
import Hire from './Content/Hire.jsx';
import Footer from './Footer/Footer.jsx';
const App = () => {

  return(<>
    <Navbar/>
    <Header/>
    <Skills/>
    <Projects/>
    <Hire/>
    <Footer/>
  </>);

}

export default App;
