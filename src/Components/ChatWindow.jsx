import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import './ChatWindow.css'

export default function ChatWindow({ setShowProfileModal }) {
    const { contacts, addMessage } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message.trim()) {
            addMessage(Number(contact_id), message.trim())
            setMessage('')
        }
    }

    if (!contact_selected) {
        return (
            <div className="chat-window">
                <div className="chat-empty">
                    <p>Seleccione un contacto para empezar a chatear</p>
                </div>
            </div>
        )
    }

    return (
        <div className="chat-window">
            <div className="chat-header-top">
                <div className="chat-header-info">
                    <img src={contact_selected.profile_picture} alt={contact_selected.Name} className="header-avatar" />
                    <div>
                        <h2>{contact_selected.Name}</h2>
                        <p className="status-text">Disponible</p>
                    </div>
                </div>
                <button className="profile-menu-btn" onClick={() => setShowProfileModal(true)} title="Ver información de contacto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
            </div>

            <div className="messages-area">
                {contact_selected.messages.map(message => (
                    <div
                        key={message.id}
                        className={`message-wrapper ${message.send_by_name ? 'sent' : 'received'}`}
                    >
                        <div className="message-bubble">
                            <p>{message.Text}</p>
                            <span className="message-timestamp">{message.created_at}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="input-area">
                <form className="message-form" onSubmit={handleSubmit}>
                    <textarea
                        className="message-textarea"
                        placeholder="Escribe un mensaje..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}
                    />
                    <button type="submit" className="send-btn">➤</button>
                </form>
                <div className="input-buttons">
                    <button type="button" className="attachment-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </button>
                    <button type="button" className="recording-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
