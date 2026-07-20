import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import { Link } from "react-router"
import "./ContactSidebar.css"

const SidebarContacts = () => {
    const { contacts } = useContext(ContactContext)
    
    return (
        <aside className="whatsapp-sidebar">
            <div className="chats-container">
                {contacts.map(contact => (
                    <Link to={`/contact/${contact.id}`} key={contact.id} className="chat-link">
                        <div className="side-bar__contact-profile-picture">
                            <img src={contact.profilePicture} alt={contact.name} />
                        </div>
                        <div className="side-bar__contact-info">
                            <div className="side-bar__contact-header">
                                <h3>{contact.name}</h3>
                                {/* <span className="side-bar__contact-time">10:42</span> */}
                            </div>
                            <p>{contact.lastMessage}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default SidebarContacts