import { Link } from "react-router";
import "./ContactInfoHeader.css";

function ContactInfoHeader({ currentContact }) {
    return (
        <div className="contact-info-header-container">
            <header className="contact-info-header">
                <Link
                    className="contact-info-header__icon"
                    to={`/contact/${currentContact.id}`}
                    title="Close"
                >
                    <span>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor">
                            <title>ic-close</title>
                            <path fill="currentColor" d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.27.42.27.7 0 .28-.09.52-.27.7L13.4 12l4.9 4.9c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27L12 13.4Z"></path>
                        </svg>
                    </span>
                </Link>
                <div className="contact-info-header__title">
                    <span>Contact info</span>
                </div>
                <div className="contact-info-header__icon contact-info-header__icon--edit" title="Edit status">
                    <span>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none">
                            <title>pencil-refreshed</title>
                            <path fill="currentColor" d="M5 19h1.4l9.8-9.78-1.42-1.42L5 17.6V19Zm-1 2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-2.43a1.97 1.97 0 0 1 .58-1.4L16.2 3.57a2.07 2.07 0 0 1 2.19-.43c.24.11.46.26.66.46L20.43 5c.2.18.34.4.43.64a2.13 2.13 0 0 1 0 1.51c-.09.25-.23.47-.43.67l-12.6 12.6a1.94 1.94 0 0 1-1.4.58H4Z"></path>
                        </svg>
                    </span>
                </div>
            </header>
        </div>
    )
}

export default ContactInfoHeader