import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import './ProfilePanel.css'

export default function ProfilePanel({ isModalOpen = false, setIsModalOpen = () => {} }) {
    const { contacts } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))
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
                        alt={contact_selected.Name}
                        className="profile-avatar-large"
                        onClick={handleOpenStatus}
                        role="button"
                        title="Ver estados"
                    />
                    <h2 className="profile-name">{contact_selected.Name}</h2>
                    <p className="profile-role">contacto</p>
                </div>

                <div className="profile-sections">
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
                                <p>No hay mensajes destacados</p>
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
                                <p>No hay archivos multimedia</p>
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
                                <p>No hay archivos compartidos</p>
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
                                <p><strong>Última conexión:</strong> {contact_selected.last_time_connection}</p>
                                <p><strong>Estado:</strong> disponible</p>
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
