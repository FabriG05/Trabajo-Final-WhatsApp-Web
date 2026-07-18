import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";
//Por ahora, para que se renderize, lo dejamos así. Cambiar el return y poner outlet.

const ContactContext = createContext()
const server_contacts = [
    {
        id: 1,
        name: "Anita",
        lastMessage: "Of course",
        messages: [
            { id: 1, sendByMe: false, content: "Hola!" },
            { id: 2, sendByMe: true, content: "Cómo estás?" },
            { id: 3, sendByMe: false, content: "Bien. Wbu?" },
            { id: 4, sendByMe: true, content: "Todo bien. U ready for Spiderman?" }
        ]
    },
    {
        id: 2,
        name: "María Gómez",
        lastMessage: "Sisis. Te manda saludos Cruella",
        messages: [
            { id: 1, sendByMe: true, content: "Eu, cómo andás?" },
            { id: 2, sendByMe: false, content: "Todo piola compañere" },
            { id: 3, sendByMe: false, content: "Vos?" },
            { id: 4, sendByMe: true, content: "Bien. Te puedo molestar con 1 millón 700 mil pesos?? " }
        ]
    },
    {
        id: 3,
        name: "Nico",
        lastMessage: "Dale, nos vemos hoy a la noche",
        messages: [
            { id: 1, sendByMe: false, content: "Te pinta que nos veamos a la noche y comamos algo tranqui?" },
            { id: 2, sendByMe: true, content: "Dale, bldo" },
            { id: 3, sendByMe: false, content: "Te paso a buscar tipo 8:30 /9" },
            { id: 4, sendByMe: true, content: "Te espero." }
        ]
    },
    {
        id: 4,
        name: "Isa",
        lastMessage: "Sisis",
        messages: [
            { id: 1, sendByMe: true, content: "Eu blda, te gustó lo de Billie de la otra vuelta?" },
            { id: 2, sendByMe: true, content: "Couldn't stop crying tbh..." },
            { id: 3, sendByMe: false, content: "Tuvo muy bueno. Alto plan" },
            { id: 4, sendByMe: true, content: "Te pinta que la prox vayamos a escuchar AM de los Artic??" }
        ]
    },
]

function ContactContextProvider({children}) {
    const [contacts, setContacts] = useState(server_contacts)
    const { contact_id } = useParams()
    
    let contact_selected = null
    if (contact_id) {
        contact_selected = contacts.find(contact => contact.id === Number(contact_id))
    }

    function deleteMessageById(message_id) {
        const contacts_modified = contacts.map((contact) => {
            if (contact.id === Number(contact_id)) {
                return {
                    ...contact,
                    messages: contact.messages.filter(msg => msg.id !== Number(message_id))
                }
            }
            return contact
        })
        setContacts(contacts_modified)
    }

    function createMessage(value, sendByMe) {
        const contacts_modified = contacts.map((contact) => {
            if (contact.id === Number(contact_id)) {
                const new_message = {
                    id: contact.messages.length + 1,
                    sendByMe: sendByMe,
                    content: value
                }
                return {
                    ...contact,
                    lastMessage: value,
                    messages: [...contact.messages, new_message]
                }
            }
            return contact
        })
        setContacts(contacts_modified)
    }

    function deleteAllMessages() {
        const contacts_modified = contacts.map((contact) => {
            if (contact.id === Number(contact_id)) {
                return {
                    ...contact,
                    lastMessage: "",
                    messages: []
                }
            }
            return contact
        })
        setContacts(contacts_modified)
    }

    const provider_values = {
        contacts,
        contact_selected,
        deleteMessageById,
        createMessage,
        deleteAllMessages
    }

    return (
        <ContactContext.Provider value={provider_values}>
            {children}
        </ContactContext.Provider>
    )
}

export { ContactContext, ContactContextProvider }