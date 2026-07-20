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
            <div>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>plus-rounded</title><path fill="currentColor" d="M11 13H5.5a1 1 0 1 1 0-2H11V5.5a1 1 0 1 1 2 0V11h5.5a1 1 0 1 1 0 2H13v5.5a1 1 0 1 1-2 0V13Z"></path></svg></span>
            </div>
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
