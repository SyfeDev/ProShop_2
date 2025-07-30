import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HommeScreen from './screens/HommeScreen' 


const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <div className='container'>
        <h1>Welcome to ProShop</h1>
        <HommeScreen />
      </div>
    </main>    
    <Footer />
    </>
  )
}

export default App