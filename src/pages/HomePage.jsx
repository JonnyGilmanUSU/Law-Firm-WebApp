import {useState, useCallback} from 'react';
import React from 'react'
import SampleContextProvider from '../store/SampleContextProvider'
import Adbox from '../components/Adbox/Adbox'
import Highlight from '../components/Highlight/HIghlight'
import Featured from '../components/Featured/Featured'

const HomePage = () => {

    const [showPromise, setShowPromise] = useState(false);

    const toggleShowPromiseHandler = useCallback((event) => {
      // console.log("In the click handler!")
      setShowPromise((oldValue) => { return !oldValue; })
    }, [])
  return (
    <SampleContextProvider>
         <Adbox onToggle={toggleShowPromiseHandler} />
         {/* <StatePlayground /> */}
         <Highlight showPromise={showPromise} />
         <Featured />
      </SampleContextProvider>
  )
}

export default HomePage