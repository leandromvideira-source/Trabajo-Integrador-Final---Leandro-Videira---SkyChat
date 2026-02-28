import React, { useContext } from 'react'
import { getContacts } from '../services/contactsService'
import { ContactsContext } from '../Context/ContactsContext'
import { Link } from 'react-router'
import './ContactSidebar.css'

export default function ContactSidebar() {

    const { contacts, favorite_name } = useContext(ContactsContext)
    return (
        <div className="sidebar">
            <div className="sidebar-header">SkyChat</div>
            <div className="contacts-list">
                {
                    contacts.map(
                        (contact) => {
                            return (
                                <Link
                                    to={`/contact/${contact.id}`}
                                    key={contact.id}
                                    className="contact-item"
                                >
                                    <img
                                        src={contact.profile_picture}
                                        alt={contact.Name}
                                        className="contact-avatar"
                                    />
                                    <div className="contact-info">
                                        <h3>{contact.Name}</h3>
                                        <p>{contact.last_time_connection}</p>
                                    </div>
                                </Link>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
    
}