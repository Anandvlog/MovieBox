import React from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'


const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className='main-content'> {children}</div>
      <Footer/>
    </>
  )
}

export default Layout