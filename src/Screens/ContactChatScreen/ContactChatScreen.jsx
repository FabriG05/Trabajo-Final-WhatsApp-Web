import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"
import WhatsappSidebar from "../../Components/WhatsAppSidebar/WhatsAppSidenar"
import { useParams, Link } from "react-router"
import Messages from "../../Components/Messages/MEssages"


const ContactChatScreen = () => {
    const { id } = useParams()
    const { contacts } = useContext(ContactContext)
    const currentContact = contacts?.find(c => c.id == id)
    if (!currentContact) {
        return (
            <div>
                <WhatsappSidebar />
                <h2>Contact not found.</h2>
                <Link to="/">Volver al Inicio</Link>
            </div>
        )
    }
    return (
        <div>
            <WhatsappSidebar />
            <h2>{currentContact.name}</h2>
            <Messages />
        </div>
    )
}

export default ContactChatScreen