import React from 'react'
import ContentCenter from './LandingPage/ContentCenter'
import NavBar from './LandingPage/NavBar'
import { Provider } from 'react-redux'
import { store } from '../store/store';
import Footer from './LandingPage/Footer';

const App = () => {
  return (
    <Provider store={ store }>
    <NavBar/>
    <ContentCenter/>
    <Footer/>
    </Provider>
  )
}

export default App