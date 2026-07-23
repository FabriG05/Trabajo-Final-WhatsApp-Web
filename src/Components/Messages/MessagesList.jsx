import { useContext } from "react"
import { useParams } from "react-router"
import { ContactContext } from "../../Context/ContactContext"

function MessagesList() {
    const { id } = useParams()
    const { contacts, deleteMessageById } = useContext(ContactContext)
    const currentContact = contacts?.find(contact => contact.id == id)

    if (!currentContact || !currentContact.messages || currentContact.messages.length === 0) {
        return (
            <div className="no-messages-container">
                <h2 className="no-messages-text">No message history yet.</h2>
            </div>
        )
    }

    return (
        <div className="messages-list">
            {currentContact.messages.map((message) => {
                const isSentByMe = message.sendByMe

                const getFormattedTime = () => {
                    if (message.time) return message.time
                    if (message.id > 4) {
                        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                    const minutes = String(message.id * 15 % 60).padStart(2, '0')
                    const hours = 10 + Math.floor(message.id * 15 / 60)
                    return `${hours}:${minutes}`
                }

                return (
                    <div
                        key={message.id}
                        className={`message-bubble-wrapper ${isSentByMe ? 'sent' : 'received'}`}
                    >
                        <div className="message-bubble">
                            <p className="message-text">{message.content}</p>
                            <div className="message-meta">
                                <span className="message-time">{getFormattedTime()}</span>
                                <button
                                    className="message-delete-btn"
                                    onClick={() => deleteMessageById(id, message.id)}
                                    title="Delete message"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MessagesList