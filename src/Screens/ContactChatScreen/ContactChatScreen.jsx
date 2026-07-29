import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"
import WhatsappSidebar from "../../Components/WhatsAppSidebar/WhatsAppSidebar"
import { useParams, Link } from "react-router"
import Messages from "../../Components/Messages/Messages"
import ContactChatHeader from "../../Components/Contact/ContactChat/ContactChatHeader/ContactChatHeader"
import "./ContactChatScreen.css"
import "./ContactChatScreen-Responsive.css"

const ContactChatScreen = () => {
    const { id } = useParams()
    const { contacts } = useContext(ContactContext)
    const currentContact = contacts?.find(c => c.id == id)
    if (!currentContact) {
        return (
            <div className="contact-chat-screen">
                <WhatsappSidebar />
                <div className="chat-area" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '16px' }}>
                    <h2>Contact not found.</h2>
                    <Link to="/" style={{ color: '#00a884', textDecoration: 'none', fontWeight: '500' }}>Volver al Inicio</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="contact-chat-screen">
            <WhatsappSidebar />
            <div className="chat-area">
                <ContactChatHeader currentContact={currentContact} />
                <Messages />
            </div>
        </div>
    )
}

export default ContactChatScreen