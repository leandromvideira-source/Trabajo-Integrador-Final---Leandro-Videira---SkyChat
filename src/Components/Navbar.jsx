import React, { useContext, useState } from 'react'
import './Navbar.css'
import { ContactsContext } from '../Context/ContactsContext'

export default function Navbar() {
    const { contacts } = useContext(ContactsContext)

    const [showSettings, setShowSettings] = useState(false)
    const [showGroups, setShowGroups] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)
    const [showStatus, setShowStatus] = useState(false)
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0)

    const statusContacts = contacts.filter(contact => contact.statusvideo)
    const currentStatus = statusContacts[currentStatusIndex]

    const handleOpenStatus = () => {
        setCurrentStatusIndex(0)
        setShowStatus(true)
    }

    const handleNextStatus = () => {
        if (statusContacts.length === 0) return

        setCurrentStatusIndex((prevIndex) => (prevIndex + 1) % statusContacts.length)
    }

    const handlePreviousStatus = () => {
        if (statusContacts.length === 0) return

        setCurrentStatusIndex((prevIndex) => (prevIndex - 1 + statusContacts.length) % statusContacts.length)
    }

    // Notificaciones de ejemplo (en orden de llegada, las más recientes primero)
    const notifications = [
        { id: 1, message: 'Homero te envió un mensaje', time: 'Hace 2 minutos', type: 'message' },
        { id: 2, message: 'Te etiquetaron en un grupo', time: 'Hace 8 minutos', type: 'group' },
        { id: 3, message: 'Bart está en línea', time: 'Hace 15 minutos', type: 'online' },
        { id: 4, message: 'Nuevo mensaje en "Amigos"', time: 'Hace 32 minutos', type: 'group' },
        { id: 5, message: 'Moe te ha agregado como contacto', time: 'Hace 1 hora', type: 'contact' }
    ]

    return (
        <>
            <nav className="navbar">
                <div className="navbar-top">
                    <div className="navbar-icon" title="Chat"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                    </svg></div>
                    <div className="navbar-icon" title="Estados" onClick={handleOpenStatus} style={{ cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    </svg></div>
                    <div className="navbar-icon" title="Notificaciones" onClick={() => setShowNotifications(!showNotifications)} style={{ cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                    </svg></div>
                    <div className="navbar-icon" title="Grupos" onClick={() => setShowGroups(!showGroups)} style={{ cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 4-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg></div>
                </div>
                <div className="navbar-bottom">
                    <div className="navbar-icon" title="Ajustes" onClick={() => setShowSettings(!showSettings)} style={{ cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                    </svg></div>
                    <div className="navbar-icon" title="Perfil"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg></div>
                </div>
            </nav>
            {showStatus && (
                <>
                    <div className="settings-overlay" onClick={() => setShowStatus(false)}></div>
                    <div className="status-modal">
                        <div className="status-content">
                            {currentStatus ? (
                                <div className="status-phone-frame">
                                    <video
                                        key={currentStatus.id}
                                        className="status-video"
                                        src={currentStatus.statusvideo}
                                        controls
                                        autoPlay
                                    />
                                    <div className="status-topbar">
                                        <p className="status-name">{currentStatus.Name}</p>
                                        <button className="status-close-btn" onClick={() => setShowStatus(false)} aria-label="Cerrar estados">✕</button>
                                    </div>
                                    <button className="status-nav-btn status-nav-prev" onClick={handlePreviousStatus} aria-label="Estado anterior">‹</button>
                                    <button className="status-nav-btn status-nav-next" onClick={handleNextStatus} aria-label="Estado siguiente">›</button>
                                </div>
                            ) : (
                                <p className="status-empty">No hay estados disponibles.</p>
                            )}
                        </div>
                    </div>
                </>
            )}
                        {showSettings && (
                            <>
                                <div className="settings-overlay" onClick={() => setShowSettings(false)}></div>
                                <div className="settings-modal">
                                    <div className="settings-header">
                                        <h2>Ajustes</h2>
                                        <button className="close-btn" onClick={() => setShowSettings(false)}>✕</button>
                                    </div>
                                    <div className="settings-content">
                                        <div className="settings-item">
                                            <span>Notificaciones</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Tema</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Privacidad</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Idioma</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Acerca de</span>
                                        </div>
                                        <div className="settings-item logout">
                                            <span>Cerrar sesión</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {showGroups && (
                            <>
                                <div className="settings-overlay" onClick={() => setShowGroups(false)}></div>
                                <div className="settings-modal">
                                    <div className="settings-header">
                                        <h2>Grupos</h2>
                                        <button className="close-btn" onClick={() => setShowGroups(false)}>✕</button>
                                    </div>
                                    <div className="settings-content">
                                        <div className="settings-item">
                                            <span>Mis Grupos</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Crear Grupo</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Explorar Grupos</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Grupos Favoritos</span>
                                        </div>
                                        <div className="settings-item">
                                            <span>Grupos Archivados</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {showNotifications && (
                            <>
                                <div className="settings-overlay" onClick={() => setShowNotifications(false)}></div>
                                <div className="settings-modal notifications-modal">
                                    <div className="settings-header">
                                        <h2>Notificaciones</h2>
                                        <button className="close-btn" onClick={() => setShowNotifications(false)}>✕</button>
                                    </div>
                                    <div className="settings-content notifications-list">
                                        {notifications.length > 0 ? (
                                            notifications.map(notif => (
                                                <div key={notif.id} className="notification-item">
                                                    <div className="notification-icon">
                                                        {notif.type === 'message' && '💬'}
                                                        {notif.type === 'group' && '👥'}
                                                        {notif.type === 'online' && '🟢'}
                                                        {notif.type === 'contact' && '➕'}
                                                    </div>
                                                    <div className="notification-content">
                                                        <p className="notification-message">{notif.message}</p>
                                                        <p className="notification-time">{notif.time}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="no-notifications">
                                                <p>No hay notificaciones nuevas</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                    )
}
