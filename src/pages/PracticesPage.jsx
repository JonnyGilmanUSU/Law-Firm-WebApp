import React from 'react'
import PracticesContextProvider from '../store/PracticesContextProvider'
import PracticesSidebar from '../components/Practices/PracticesSidebar'
import Practices from '../components/Practices/Practices'

const PracticesPage = () => {
    return (
        <PracticesContextProvider>
            <PracticesSidebar />
            <Practices />
        </PracticesContextProvider>
    )
}

export default PracticesPage