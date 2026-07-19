import { useContext } from "react"
import { useParams } from "react-router"
import { ContactContext } from "../../Context/ContactContext"
import MessagesList from "./MessagesList"

function Messages() {
    const { deleteAllMessages, createMessage } = useContext(ContactContext)
    const { id } = useParams()
    function handleCreateMessage(event) {
        event.preventDefault()
        createMessage(id, event.target.message.value, true)
        event.target.reset()
    }
    return (
        <div>
            <MessagesList />
            <form onSubmit={handleCreateMessage}>
                <label htmlFor="message">Send a message:</label>
                <textarea id="message" name="message" />
                <button type="submit">Send</button>
            </form>
            <button onClick={() => deleteAllMessages(id)}>Delete all messages</button>
        </div>
    )
}

export default Messages
