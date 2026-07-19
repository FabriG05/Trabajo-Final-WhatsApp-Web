import { useState } from 'react'
import { ThemeContextProvider } from './Context/Themecontext'
import { Route, Routes } from 'react-router'
import { ContactContextProvider } from './Context/ContactContext'
import WhatsappSidebar from './Components/WhatsAppSidebar/WhatsAppSidenar'
import HomeScreen from './Screens/HomeScreen/HomeScreen'



function App() {
  return (
    <ThemeContextProvider>
      <ContactContextProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            {/* <Route path="/contact/:id" element={<ContactScreen />} /> */}
            <Route path="*" element={<h2>404 - Not Found</h2>} />
          </Routes>
      </ContactContextProvider>
    </ThemeContextProvider>
  )
}

export default App;






{/* <Routes>
          <Route path='/' element={HomeScreen} />
          <Route path='home' element={HomeScreen} />
          <ContactContextProvider>
            <Route path='/contact/:contact_id' element={ContactChatScreen} >
              
            </Route>
          </ContactContextProvider>
</Routes> */}