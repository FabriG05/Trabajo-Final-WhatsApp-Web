import { Route, Routes } from 'react-router'
import { ContactContextProvider } from './Context/ContactContext'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactChatScreen from './Screens/ContactChatScreen/ContactChatScreen'
import ContactInfoScreen from './Screens/ContactInfoScreen/ContactInfoScreen'


function App() {
  return (
    <ContactContextProvider>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/contact/:id" element={<ContactChatScreen />} />
        <Route path="/contact/:id/info" element={<ContactInfoScreen />} />
        {/* <Route path="*" element={<h2>404 - Not Found</h2>} /> */}
      </Routes>
    </ContactContextProvider>
  )
}

export default App