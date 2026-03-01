import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import './ChatList.css'

export default function ChatList({ isModalOpen = false, setIsModalOpen = () => {} }) {
    const { contacts } = useContext(ContactsContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [activeId, setActiveId] = useState(null)
    const [showAddContacts, setShowAddContacts] = useState(false)

    const filteredContacts = contacts.filter(contact =>
        contact.Name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            {isModalOpen && (
                <div className="chat-list-overlay" onClick={() => setIsModalOpen(false)}></div>
            )}
            <div className={`chat-list-panel ${isModalOpen ? 'modal-open' : ''}`}>
            <div className="chat-list-header">
                <h2>SkyChat</h2>
                <img src="/Images/logo fenixtalk.png" alt="Fenixtalk Logo" className="logo-fenixtalk-navbar" />
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar contactos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="contacts-list">
                {filteredContacts.map(contact => (
                    <Link
                        to={`/chat/${contact.id}`}
                        key={contact.id}
                        className={`chat-item ${activeId === contact.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveId(contact.id)
                            if (isModalOpen) {
                                setIsModalOpen(false)
                            }
                        }}
                    >
                        <div className="chat-avatar-wrapper">
                            <img
                                src={contact.profile_picture}
                                alt={contact.Name}
                                className="chat-avatar"
                            />
                            <div className="status-badge"></div>
                        </div>
                        <div className="chat-info">
                            <h3>{contact.Name}</h3>
                            <p>{contact.last_time_connection}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Botón flotante + */}
            <button 
                className="fab-add-contacts" 
                onClick={() => setShowAddContacts(!showAddContacts)}
                title="Agregar contactos"
            >
                +
            </button>

            {/* Modal de contactos */}
            {showAddContacts && (
                <div className="add-contacts-modal">
                    <div className="add-contacts-header">
                        <h3>Agregar Contacto</h3>
                        <button className="close-modal-btn" onClick={() => setShowAddContacts(false)}>✕</button>
                    </div>
                    <div className="add-contacts-list">
                        {contacts.map(contact => (
                            <div key={contact.id} className="add-contact-item">
                                <img src={contact.profile_picture} alt={contact.Name} className="add-contact-avatar" />
                                <div className="add-contact-info">
                                    <p className="add-contact-name">{contact.Name}</p>
                                    <p className="add-contact-phone">{contact.phoneNumber || contact.PhoneNumber}</p>
                                </div>
                                <button className="add-contact-action">+</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            </div>
        </>
    )
}
