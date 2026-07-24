import "./ContactInfoMain.css";

function ContactInfoMain({ currentContact }) {
    const getContactDetails = (id) => {
        switch (Number(id)) {
            case 1:
                return { phone: "+54 9 351 555-1234", about: "Hey there! I am using WhatsApp. 🌻" };
            case 2:
                return { phone: "+54 9 351 444-5678", about: "OMG I <3 Cruella!" };
            case 3:
                return { phone: "+54 9 351 333-4567", about: "Sleeping" };
            case 4:
                return { phone: "+54 9 351 222-3456", about: "Listening to music 🎧" };
            default:
                return { phone: "+54 9 351 123-4567", about: "Available" };
        }
    };

    const details = getContactDetails(currentContact.id);

    return (
        <div className="contact-info-main">

            <div className="contact-info-main__card contact-info-main__card--profile">
                <div className="contact-info-main__avatar-wrapper">
                    <img
                        className="contact-info-main__avatar"
                        src={currentContact.profilePicture}
                        alt={currentContact.name}
                    />
                </div>
                <h2 className="contact-info-main__name">{currentContact.name}</h2>
                <p className="contact-info-main__phone-number">{details.phone}</p>

                <div className="contact-info-main__actions">
                    <div className="contact-info-main__action-btn">
                        <div className="contact-info-main__action-icon">
                            <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                                <title>ic-call</title>
                                <path fill="currentColor" d="M19.95 21c-2.08 0-4.14-.45-6.17-1.36a18.3 18.3 0 0 1-5.55-3.87 18.47 18.47 0 0 1-3.87-5.54C3.46 8.18 3 6.13 3 4.04A1.02 1.02 0 0 1 4.05 3H8.1c.23 0 .44.08.63.24a.9.9 0 0 1 .32.56l.65 3.5c.03.27.03.5-.02.67-.05.19-.15.35-.28.48L6.97 10.9c.34.62.73 1.21 1.2 1.79.45.57.96 1.13 1.5 1.66A17.59 17.59 0 0 0 13.1 17l2.35-2.35a1.61 1.61 0 0 1 1.3-.4l3.45.7c.23.07.43.19.57.36.16.18.23.37.23.59v4.05A1.02 1.02 0 0 1 19.95 21ZM6.03 9l1.64-1.65L7.25 5H5.03c.08.68.2 1.36.34 2.03.16.66.37 1.32.66 1.97Zm8.95 8.95a12.42 12.42 0 0 0 4.02 1v-2.2l-2.35-.48-1.67 1.68Z"></path>
                            </svg>
                        </div>
                        <span className="contact-info-main__action-label">Audio</span>
                    </div>
                    <div className="contact-info-main__action-btn">
                        <div className="contact-info-main__action-icon">
                            <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                                <title>ic-videocam</title>
                                <path fill="currentColor" d="M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15c.17-.17.35-.2.55-.13.2.09.3.25.3.48v8.6c0 .23-.1.4-.3.47-.2.09-.38.05-.55-.12L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z"></path>
                            </svg>
                        </div>
                        <span className="contact-info-main__action-label">Video</span>
                    </div>
                    <div className="contact-info-main__action-btn">
                        <div className="contact-info-main__action-icon">
                            <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                                <title>ic-search</title>
                                <path fill="currentColor" d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"></path>
                            </svg>
                        </div>
                        <span className="contact-info-main__action-label">Search</span>
                    </div>
                </div>
            </div>

            <div className="contact-info-main__card contact-info-main__card--about">
                <span className="contact-info-main__section-label">About</span>
                <p className="contact-info-main__about-text">{details.about}</p>
            </div>

            <div className="contact-info-main__card contact-info-main__card--media contact-info-main__card--interactive">
                <span className="contact-info-main__media-icon">
                    <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                        <title>ic-perm-media</title>
                        <path fill="currentColor" d="M3 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v12h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 21H3Zm4-4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C5.98 2.19 6.45 2 7 2h4.18a1.97 1.97 0 0 1 1.4.58L14 4h7c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v9c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7Zm0-2h14V6h-7.82l-2-2H7v11Zm6.25-3.5L12.1 10a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-1.68 2.2a.47.47 0 0 0-.06.53c.1.18.25.27.46.27h7.96c.21 0 .37-.1.46-.28.09-.18.07-.35-.07-.52l-2.42-3.17a.48.48 0 0 0-.4-.2c-.17 0-.3.06-.4.2l-1.9 2.47Z"></path>
                    </svg>
                </span>
                <span className="contact-info-main__media-text">Media, links and docs</span>
                <span className="contact-info-main__media-count">24 &gt;</span>
            </div>
        </div>
    )
}

export default ContactInfoMain