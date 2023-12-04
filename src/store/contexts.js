// Define any application contexts

import React from 'react';

const SampleContext = React.createContext({title: "Hello World!", text: "A fascinating read!"});

export const ContactContext = React.createContext({
    contactRequests: [],
    postContactRequest: () => {}
})

export const PracticesContext = React.createContext({
    practices: [],
    isLoading: false,
    error: null
})

export default SampleContext;