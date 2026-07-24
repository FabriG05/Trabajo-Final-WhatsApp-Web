import { useParams } from "react-router"
import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"
import ContactChatScreen from "../ContactChatScreen/ContactChatScreen"
import ContactInfoHeader from "../../Components/Contact/ContactInfo/ContactInfoHeader/ContactInfoHeader"
import ContactInfoMain from "../../Components/Contact/ContactInfo/ContactInfoMain/ContactInfoMain"
import ContactInfoFooter from "../../Components/Contact/ContactInfo/ContactInfoFooter/ContactInfoFooter"
import "./ContactInfoScreen.css"

function ContactInfoScreen() {
    const { id } = useParams();
    const { contacts } = useContext(ContactContext);
    const currentContact = contacts.find(contact => contact.id == id);

    if (!currentContact) {
        return (
            <div className="contact-info-container">
                <ContactChatScreen />
            </div>
        );
    }

    return (
        <div className="contact-info-container">
            <ContactChatScreen />
            <aside className="contact-info-panel">
                <ContactInfoHeader currentContact={currentContact} />
                <div className="contact-info-scrollable">
                    <ContactInfoMain currentContact={currentContact} />
                    <ContactInfoFooter currentContact={currentContact} />
                </div>
            </aside>
        </div>
    );
}

export default ContactInfoScreen