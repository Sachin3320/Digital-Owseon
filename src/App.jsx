import React from 'react'
import CommonLayout from './Components/Layout/CommonLayout'
import LandingPage from './Components/HomeComponents/LandingComp'
import ConferenceSolutions from './Components/HomeComponents/ConferenceSoluton'

const App = () => {
  return (
    <div className='bg-black '>
      <CommonLayout>
        <LandingPage />
        <ConferenceSolutions />
      </CommonLayout>

    </div>
  )
}

export default App