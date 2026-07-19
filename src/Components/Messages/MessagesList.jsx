import { useContext } from "react"
import { useParams } from "react-router"
import { ContactContext } from "../../Context/ContactContext"

function MessagesList() {
    const { id } = useParams()
    const { contacts, deleteMessageById } = useContext(ContactContext)
    const currentContact = contacts?.find(contact => contact.id == id)
    if (!currentContact.messages || currentContact.messages.length === 0) {
        return (
            <h2>No message history yet.</h2>
        )
    }
    return currentContact.messages.map(
        (message) => {
            return (
                <div key={message.id}>
                    <h2>{message.sendByMe ? 'You' : currentContact.name}</h2>
                    <p>{message.content}</p>
                    <button onClick={() => deleteMessageById(id, message.id)}>
                        Delete
                    </button>
                    <hr />
                </div>
            )
        }
    )
}

export default MessagesList