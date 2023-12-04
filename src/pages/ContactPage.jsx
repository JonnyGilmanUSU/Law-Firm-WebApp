import React from 'react'
import ContactContextProvider from '../store/ContactContextProvider'
import Sidebar from '../components/UI/Sidebar/Sidebar'
import ContactSidebar from '../components/Contact/ContactSidebar'
import Main from '../components/UI/Main/Main'
import ContactForm from '../components/Contact/ContactForm_state'

const ContactPage = () => {
  return (
    <ContactContextProvider>
           <Sidebar>
             <ContactSidebar />
           </Sidebar>
           <Main>
             <ContactForm />
           </Main>
         </ContactContextProvider>
  )
}

export default ContactPage