import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import { groups } from '../data/ContactData.js'
import './ProfilePanel.css'

export default function ProfilePanel({ isModalOpen = false, setIsModalOpen = () => {} }) {
    const { contacts } = useContext(ContactsContext)
    const { contact_id } = useParams()
    
    const isGroup = contact_id && contact_id.toString().startsWith('g')
    const contact_selected = isGroup
        ? groups.find(g => g.id === contact_id)
        : contacts.find(contact => Number(contact.id) === Number(contact_id))
    
    const [expandedSection, setExpandedSection] = useState(null)
    const [showStatus, setShowStatus] = useState(false)
    const statusContacts = contacts.filter(contact => contact.statusvideo)
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0)

    const currentStatus = statusContacts[currentStatusIndex]

    if (!contact_selected) {
        return <div className="profile-panel"></div>
    }

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    const handleOpenStatus = () => {
        const selectedIndex = statusContacts.findIndex(contact => contact.id === contact_selected.id)

        if (selectedIndex >= 0) {
            setCurrentStatusIndex(selectedIndex)
            setShowStatus(true)
        }
    }

    const handleNextStatus = () => {
        if (statusContacts.length === 0) return

        setCurrentStatusIndex((prevIndex) => (prevIndex + 1) % statusContacts.length)
    }

    const handlePreviousStatus = () => {
        if (statusContacts.length === 0) return

        setCurrentStatusIndex((prevIndex) => (prevIndex - 1 + statusContacts.length) % statusContacts.length)
    }

    return (
        <>
            {isModalOpen && (
                <div className="profile-modal-overlay" onClick={() => setIsModalOpen(false)}></div>
            )}
            <div className={`profile-panel ${isModalOpen ? 'modal-open' : ''}`}>
                <div className="profile-header-section">
                    {isModalOpen && (
                        <button className="profile-modal-close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
                    )}
                    <img
                        src={contact_selected.profile_picture}
                        alt={contact_selected.Name || contact_selected.name}
                        className="profile-avatar-large"
                        onClick={handleOpenStatus}
                        role="button"
                        title="Ver estados"
                    />
                    <h2 className="profile-name">{contact_selected.Name || contact_selected.name}</h2>
                    <p className="profile-role">{isGroup ? 'grupo' : 'contacto'}</p>
                </div>

                <div className="profile-sections">
                    {isGroup && (
                        <div className="profile-section">
                            <button
                                className="section-toggle"
                                onClick={() => toggleSection('members')}
                            >
                                <span>Miembros ({contact_selected.members.length})</span>
                                <span className="toggle-arrow">{expandedSection === 'members' ? '▼' : '▶'}</span>
                            </button>
                            {expandedSection === 'members' && (
                                <div className="section-content members-list">
                                    {contact_selected.members.map(member => (
                                        <div key={member.id} className="member-item">
                                            <img src={member.profile_picture} alt={member.Name} className="member-avatar" />
                                            <p className="member-name">{member.Name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="profile-section">
                        <button
                            className="section-toggle"
                            onClick={() => toggleSection('starred')}
                        >
                            <span>Mensajes destacados</span>
                            <span className="toggle-arrow">{expandedSection === 'starred' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'starred' && (
                            <div className="section-content">
                                {isGroup && contact_selected.starredMessages && contact_selected.starredMessages.length > 0 ? (
                                    <div className="starred-messages">
                                        {contact_selected.starredMessages.map(msg => (
                                            <div key={msg.id} className="starred-message-item">
                                                <p className="starred-author">{msg.author}</p>
                                                <p className="starred-text">{msg.Text}</p>
                                                <span className="starred-date">{msg.created_at}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No hay mensajes destacados</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="profile-section">
                        <button
                            className="section-toggle"
                            onClick={() => toggleSection('media')}
                        >
                            <span>Multimedia</span>
                            <span className="toggle-arrow">{expandedSection === 'media' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'media' && (
                            <div className="section-content">
                                {isGroup && contact_selected.media && contact_selected.media.length > 0 ? (
                                    <div className="media-list">
                                        {contact_selected.media.map(item => (
                                            <div key={item.id} className="media-item">
                                                <span className="media-icon">{item.type === 'image' ? '🖼️' : '🎥'}</span>
                                                <div className="media-info">
                                                    <p className="media-name">{item.name}</p>
                                                    <span className="media-date">{item.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No hay archivos multimedia</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="profile-section">
                        <button
                            className="section-toggle"
                            onClick={() => toggleSection('files')}
                        >
                            <span>Archivos y documentos</span>
                            <span className="toggle-arrow">{expandedSection === 'files' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'files' && (
                            <div className="section-content">
                                {isGroup && contact_selected.files && contact_selected.files.length > 0 ? (
                                    <div className="files-list">
                                        {contact_selected.files.map(file => (
                                            <div key={file.id} className="file-item">
                                                <span className="file-icon">📄</span>
                                                <div className="file-info">
                                                    <p className="file-name">{file.name}</p>
                                                    <span className="file-details">{file.size} • {file.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No hay archivos compartidos</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="profile-section">
                        <button
                            className="section-toggle"
                            onClick={() => toggleSection('info')}
                        >
                            <span>Información</span>
                            <span className="toggle-arrow">{expandedSection === 'info' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'info' && (
                            <div className="section-content">
                                {isGroup ? (
                                    <>
                                        <p><strong>Tipo:</strong> Grupo</p>
                                        <p><strong>Miembros:</strong> {contact_selected.members.length}</p>
                                        <p><strong>Última actividad:</strong> {contact_selected.last_time_connection}</p>
                                    </>
                                ) : (
                                    <>
                                        <p><strong>Última conexión:</strong> {contact_selected.last_time_connection}</p>
                                        <p><strong>Estado:</strong> disponible</p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showStatus && (
                <>
                    <div className="profile-status-overlay" onClick={() => setShowStatus(false)}></div>
                    <div className="profile-status-modal">
                        <div className="profile-status-content">
                            {currentStatus ? (
                                <div className="profile-status-phone-frame">
                                    <video
                                        key={currentStatus.id}
                                        className="profile-status-video"
                                        src={currentStatus.statusvideo}
                                        controls
                                        autoPlay
                                    />
                                    <div className="profile-status-topbar">
                                        <p className="profile-status-name">{currentStatus.Name}</p>
                                        <button className="profile-status-close-btn" onClick={() => setShowStatus(false)} aria-label="Cerrar estados">✕</button>
                                    </div>
                                    <button className="profile-status-nav-btn profile-status-nav-prev" onClick={handlePreviousStatus} aria-label="Estado anterior">‹</button>
                                    <button className="profile-status-nav-btn profile-status-nav-next" onClick={handleNextStatus} aria-label="Estado siguiente">›</button>
                                </div>
                            ) : (
                                <p className="profile-status-empty">No hay estados disponibles.</p>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
