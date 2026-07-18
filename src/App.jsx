import { useState } from 'react'
import { ThemeContextProvider } from './Context/Themecontext'
import { Route, Routes } from 'react-router'
import { ContactContextProvider } from './Context/ContactContext'
import WhatsappSidebar from './Components/WhatsAppSidebar/WhatsAppSidenar'



function App() {

  return ( //Por ahora, para que se renderize, lo dejamos así.
    <ThemeContextProvider>
    <ContactContextProvider>
      <WhatsappSidebar />
    </ContactContextProvider>
    </ThemeContextProvider>
  )
}

export default App






{/* <Routes>
          <Route path='/' element={HomeScreen} />
          <Route path='home' element={HomeScreen} />
          <ContactContextProvider>
            <Route path='/contact/:contact_id' element={ContactChatScreen} >
              
            </Route>
          </ContactContextProvider>
</Routes> */}