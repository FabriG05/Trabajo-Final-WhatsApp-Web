import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import { Link } from "react-router"

const SidebarContacts = () => {
    const { contacts } = useContext(ContactContext)
    return (
        <aside className="whatsapp-sidebar">
            <div className="chats-container">
                {contacts.map(contact => {
                    return (
                        <Link to={`/contact/${contact.id}`} key={contact.id} className="chat-link">
                            <h3>{contact.name}</h3>
                            <p>{contact.lastMessage}</p>
                            <hr />
                        </Link>
                    )
                })}
            </div>
        </aside>
    )
}

export default SidebarContacts