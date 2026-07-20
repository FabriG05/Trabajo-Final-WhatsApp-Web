import SidebarAsideNav from "./SidebarAsideNav/SidebarAsideNav"
import SidebarHeader from "./SidebarHeader/SidebarHeader"
import SidebarContacts from "./SidebarContacts/ContactSidebar"
import "./WhatsAppSidebar.css"

function WhatsappSidebar() {
    return (
        <aside className="WhatsappSidebar">
            <SidebarAsideNav />
            <div>
                <SidebarHeader />
                <SidebarContacts />
            </div>
        </aside>
    )
}

export default WhatsappSidebar