import SidebarAsideNav from "./SidebarAsideNav/SidebarAsideNav"
import SidebarHeader from "./SidebarHeader/SidebarHeader"
import SidebarContacts from "./SidebarContacts/ContactSidebar"

function WhatsappSidebar() {
    return (
        <aside>
            <SidebarAsideNav />
            <SidebarHeader />
            <SidebarContacts />
        </aside>
    )
}

export default WhatsappSidebar