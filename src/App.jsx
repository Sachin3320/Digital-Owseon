import React from 'react'
import CommonLayout from './Components/Layout/CommonLayout'
import LandingPage from './Components/HomeComponents/LandingComp'
import ConferenceSolutions from './Components/HomeComponents/ConferenceSoluton'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div className=''>
      <CommonLayout>
        <HomePage />
      </CommonLayout>

    </div>
  )
}

export default App