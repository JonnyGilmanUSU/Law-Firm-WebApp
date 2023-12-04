import React from 'react'
import Sidebar from '../components/UI/Sidebar/Sidebar'
import ContactSidebar from '../components/Contact/ContactSidebar'
import Main from '../components/UI/Main/Main'
import ContactRequestList from '../components/Contact/ContactRequestList'
import ContactContextProvider from '../store/ContactContextProvider'

const ContactRequestsPage = () => {
  return (
    <ContactContextProvider>
         <Sidebar>
           <ContactSidebar />
         </Sidebar>
         <Main>
           <ContactRequestList />
         </Main>
       </ContactContextProvider>
  )
}

export default ContactRequestsPage