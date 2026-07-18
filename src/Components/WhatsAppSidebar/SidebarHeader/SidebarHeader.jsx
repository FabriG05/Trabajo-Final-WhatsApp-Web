
const SidebarHeader = () => {
    return (
        <div>
            <header>
                <h2>WhatsApp</h2>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>new-chat-outline</title><path fill="currentColor" d="M9.53 13h1.98v1.97c0 .43.25.85.67.98a1 1 0 0 0 1.31-.94v-2.02h1.98c.43 0 .85-.25.98-.67a1 1 0 0 0-.94-1.31h-2.02V9.03c0-.43-.25-.85-.67-.98a1 1 0 0 0-1.31.94v2.02H9.49a1 1 0 0 0-.94 1.31c.13.42.55.67.98.67Z"></path><path fill="currentColor" fillRule="evenodd" d="M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.67.67h13.66c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.6L5 8.28Z" clipRule="evenodd"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>ic-more-vert</title><path fill="currentColor" d="M12 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"></path></svg></span>
            </header>
            <div>
                <span><svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>ic-search</title><path fill="currentColor" d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"></path></svg></span>
                <input type="text" placeholder="Search or start a new chat"/>
            </div>
            <div>
                <button>All</button>
                <button>Unread</button>
                <button>Favourites</button>
                <button>Groups</button>
            </div>
        </div>
    )
}

export default SidebarHeader