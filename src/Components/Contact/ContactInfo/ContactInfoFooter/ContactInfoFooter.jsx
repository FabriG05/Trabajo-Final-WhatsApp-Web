import "./ContactInfoFooter.css";

function ContactInfoFooter({ currentContact }) {
    return (
        <div className="contact-info-footer">
            <div className="contact-info-footer__card">
                <div className="contact-info-footer__row contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="none">
                            <title>star-refreshed</title>
                            <path fill="currentColor" fillRule="evenodd" d="M12 5.56 10.45 9.2c-.18.4-.56.69-1 .72l-4 .35 3.02 2.6c.33.29.48.74.38 1.18l-.9 3.87 3.43-2.06a1.2 1.2 0 0 1 1.24 0l3.43 2.06-.9-3.87c-.1-.44.05-.89.38-1.18l3.02-2.6-4-.35a1.2 1.2 0 0 1-1-.72L12 5.56Zm-1.1-2.52a1.2 1.2 0 0 1 2.2 0l2.1 4.94 5.41.47a1.2 1.2 0 0 1 .68 2.1l-4.08 3.53 1.21 5.23a1.2 1.2 0 0 1-1.78 1.3L12 17.84l-4.64 2.79a1.2 1.2 0 0 1-1.78-1.3l1.21-5.24-4.08-3.53a1.2 1.2 0 0 1 .68-2.1l5.4-.47 2.1-4.94Z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                    <span className="contact-info-footer__row-label">Starred messages</span>
                </div>

                <div className="contact-info-footer__row contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="none">
                            <title>unmute-notifications-refreshed</title>
                            <path fill="currentColor" d="M5 19a1 1 0 1 1 0-2h1v-7a5.9 5.9 0 0 1 1.25-3.69A5.77 5.77 0 0 1 10.5 4.2v-.7c0-.42.15-.77.44-1.06.29-.3.64-.44 1.06-.44.42 0 .77.15 1.06.44.3.29.44.64.44 1.06v.7a5.77 5.77 0 0 1 3.25 2.11A5.86 5.86 0 0 1 18 10v7h1a1 1 0 1 1 0 2H5Zm7 3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41h4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm-4-5h8v-7c0-1.1-.4-2.04-1.18-2.83A3.85 3.85 0 0 0 12 6c-1.1 0-2.04.4-2.82 1.17A3.85 3.85 0 0 0 8 10v7Z"></path>
                        </svg>
                    </span>
                    <span className="contact-info-footer__row-label">Mute notifications</span>
                    <span className="contact-info-footer__row-detail">No</span>
                </div>

                <div className="contact-info-footer__row contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="20" fill="currentColor">
                            <title>wds-ic-disappearing-messages</title>
                            <path fill="currentColor" d="M12 2a10 10 0 1 0 .16 20 1.11 1.11 0 1 0-.03-2.22A7.8 7.8 0 0 1 4.23 12a7.78 7.78 0 0 1 7.9-7.78A1.11 1.11 0 1 0 12.16 2H12Zm4.86 1.26a1.11 1.11 0 1 0-1.08 1.94l.22.13a1.11 1.11 0 1 0 1.14-1.9l-.28-.17Zm2.19 3.22a1.11 1.11 0 0 1 1.53.38l.16.28a1.11 1.11 0 0 1-1.94 1.08 7.86 7.86 0 0 0-.13-.22c-.31-.52-.14-1.2.38-1.52ZM22 11.84a1.11 1.11 0 1 0-2.22.03 7.8 7.8 0 0 1 0 .26 1.11 1.11 0 0 0 2.22.03 9.93 9.93 0 0 0 0-.32Zm-1.69 3.51c.54.3.73.97.43 1.5l-.16.3a1.11 1.11 0 1 1-1.9-1.15l.12-.22c.3-.54.98-.73 1.51-.43Zm-3.17 5.23a1.11 1.11 0 1 0-1.14-1.9l-.22.12a1.11 1.11 0 0 0 1.08 1.94l.28-.16Z"></path>
                            <path fill="currentColor" d="M16.78 7.62a.64.64 0 0 0-.84-.06l-4.6 3.46a1.33 1.33 0 0 0-.15 2.01l.18.18c.58.58 1.53.51 2.01-.14l3.46-4.61a.64.64 0 0 0-.06-.84Z"></path>
                        </svg>
                    </span>
                    <span className="contact-info-footer__row-label">Disappearing messages</span>
                    <span className="contact-info-footer__row-detail">Off</span>
                </div>

                <div className="contact-info-footer__row contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="24" fill="currentColor">
                            <title>ic-security</title>
                            <path fill="currentColor" d="M12 19.9a7.82 7.82 0 0 0 4.05-2.96 9.87 9.87 0 0 0 1.9-4.94H12V4.13L6 6.38v5.17c0 .12.02.27.05.45H12v7.9Zm0 2a1.98 1.98 0 0 1-.63-.1A10.11 10.11 0 0 1 6 17.64a11.7 11.7 0 0 1-2-6.54V6.38c0-.42.12-.8.36-1.13.24-.33.56-.57.94-.72l6-2.25a2.07 2.07 0 0 1 1.4 0l6 2.25c.38.15.7.39.94.72.24.33.36.7.36 1.13v4.72c0 2.33-.67 4.51-2 6.54a10.11 10.11 0 0 1-5.68 4.23c-.1.02-.2.03-.32.03Z"></path>
                        </svg>
                    </span>
                    <span className="contact-info-footer__row-label">Advanced chat privacy</span>
                </div>

                <div className="contact-info-footer__row contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                            <title>ic-lock</title>
                            <path fill="currentColor" d="M6 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V10c0-.55.2-1.02.59-1.41C4.98 8.19 5.45 8 6 8h1V6c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 12 1c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 17 6v2h1c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v10c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm0-2h12V10H6v10Zm6-3c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41 0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59ZM9 8h6V6c0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 12 3c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9 6v2Z"></path>
                        </svg>
                    </span>
                    <div className="contact-info-footer__row-text-group">
                        <span className="contact-info-footer__row-label">Encryption</span>
                        <span className="contact-info-footer__row-sublabel">Messages are end-to-end encrypted. Click to verify.</span>
                    </div>
                </div>
            </div>

            <div className="contact-info-footer__card contact-info-footer__card--danger">
                <div className="contact-info-footer__row contact-info-footer__row--danger contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                            <title>block</title>
                            <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm5.31-3.1L6.9 6.09C8.25 5.03 9.95 4.4 11.8 4.4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                        </svg>
                    </span>
                    <span className="contact-info-footer__row-label">Block {currentContact.name}</span>
                </div>

                <div className="contact-info-footer__row contact-info-footer__row--danger contact-info-footer__row--interactive">
                    <span className="contact-info-footer__row-icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                            <title>report</title>
                            <path fill="currentColor" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z"></path>
                        </svg>
                    </span>
                    <span className="contact-info-footer__row-label">Report {currentContact.name}</span>
                </div>
            </div>
        </div>
    )
}

export default ContactInfoFooter