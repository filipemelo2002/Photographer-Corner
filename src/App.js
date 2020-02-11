import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import Header from './pages/components/Header'

import Footer from './pages/components/Contact'
import './App.css'
function App() {
  return( 
    <>
      <Header />
      <Routes />
      <Footer />
    </>

  )
}

export default App;
