import { useContext } from "react"
import { useParams } from "react-router"
import { ContactContext } from "../../Context/ContactContext"
import MessagesList from "./MessagesList"
import "./Messages.css"

function Messages() {
    const { deleteAllMessages, createMessage } = useContext(ContactContext)
    const { id } = useParams()

    function handleCreateMessage(event) {
        event.preventDefault()
        const messageContent = event.target.message.value.trim()
        if (messageContent) {
            createMessage(id, messageContent, true)
            event.target.reset()
        }
    }

    return (
        <div className="chat-messages-container">
            <div className="chat-messages__scroll-area">
                <MessagesList />
            </div>

            <div className="chat-input-bar">
                <div className="chat-input-bar__actions">
                    <span className="chat-input-bar__icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none">
                            <title>plus-rounded</title>
                            <path fill="currentColor" d="M11 13H5.5a1 1 0 1 1 0-2H11V5.5a1 1 0 1 1 2 0V11h5.5a1 1 0 1 1 0 2H13v5.5a1 1 0 1 1-2 0V13Z"></path>
                        </svg>
                    </span>
                </div>

                <form className="chat-input-bar__form" name="create-message-form" onSubmit={handleCreateMessage}>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write a message"
                        className="chat-input-bar__textarea"
                        rows="1"
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                e.currentTarget.form.requestSubmit()
                            }
                        }}
                    />
                    <button type="submit" className="chat-input-bar__send-btn" title="Send message">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                            <title>Send</title>
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </form>

                <button
                    className="chat-input-bar__delete-all-btn"
                    onClick={() => {
                        if (confirm("Are you sure you want to delete all messages?")) {
                            deleteAllMessages(id)
                        }
                    }}
                    title="Delete all messages"
                >
                    <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                        <title>Delete all</title>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Messages
