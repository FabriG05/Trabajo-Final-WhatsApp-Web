import { useParams } from "react-router"
import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"
import WhatsappSidebar from "../../Components/WhatsAppSidebar/WhatsAppSidebar"
import ContactChatHeader from "../../Components/Contact/ContactChat/ContactChatHeader/ContactChatHeader"
import Messages from "../../Components/Messages/MEssages"
import ContactInfoHeader from "../../Components/Contact/ContactInfo/ContactInfoHeader/ContactInfoHeader"
import ContactInfoMain from "../../Components/Contact/ContactInfo/ContactInfoMain/ContactInfoMain"
import ContactInfoFooter from "../../Components/Contact/ContactInfo/ContactInfoFooter/ContactInfoFooter"

function ContactInfoScreen() {
    const { id } = useParams();
    const { contacts } = useContext(ContactContext);
    const currentContact = contacts.find(contact => contact.id == id);

    return (
        <div>
            <WhatsappSidebar />
            <main>
                <section>
                    <ContactChatHeader currentContact={currentContact} />
                    <Messages />
                </section>
                <aside>
                    <ContactInfoHeader currentContact={currentContact} />
                    <ContactInfoMain currentContact={currentContact} />
                    <ContactInfoFooter currentContact={currentContact} />
                </aside>
            </main>
        </div>
    );
}

export default ContactInfoScreen