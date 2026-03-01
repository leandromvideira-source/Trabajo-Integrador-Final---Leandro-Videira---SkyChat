import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import { groups } from '../data/ContactData.js'
import './ChatList.css'

export default function ChatList({ isModalOpen = false, setIsModalOpen = () => {} }) {
    const { contacts } = useContext(ContactsContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [activeId, setActiveId] = useState(null)
    const [showAddContacts, setShowAddContacts] = useState(false)
    const [filterType, setFilterType] = useState('todos')

    const getFilteredItems = () => {
        if (filterType === 'grupos') {
            return groups.filter(group =>
                group.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(group => ({ ...group, isGroup: true }))
        }

        let filtered = contacts.filter(contact =>
            contact.Name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        if (filterType === 'nocleidos') {
            filtered = filtered.filter(contact => contact.is_unread)
        } else if (filterType === 'favoritos') {
            filtered = filtered.filter(contact => contact.is_favorite)
        }

        return filtered
    }

    const filteredItems = getFilteredItems()

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

            <div className="filter-pills">
                <button 
                    className={`filter-pill ${filterType === 'todos' ? 'active' : ''}`}
                    onClick={() => setFilterType('todos')}
                >
                    Todos
                </button>
                <button 
                    className={`filter-pill ${filterType === 'favoritos' ? 'active' : ''}`}
                    onClick={() => setFilterType('favoritos')}
                >
                    Favoritos
                </button>
                <button 
                    className={`filter-pill ${filterType === 'grupos' ? 'active' : ''}`}
                    onClick={() => setFilterType('grupos')}
                >
                    Grupos
                </button>
            </div>

            <div className="contacts-list">
                {filteredItems.map(item => (
                    <Link
                        to={`/chat/${item.id}`}
                        key={item.id}
                        className={`chat-item ${activeId === item.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveId(item.id)
                            if (isModalOpen) {
                                setIsModalOpen(false)
                            }
                        }}
                    >
                        <div className="chat-avatar-wrapper">
                            <img
                                src={item.profile_picture}
                                alt={item.Name || item.name}
                                className="chat-avatar"
                            />
                            {item.isGroup ? (
                                <div className="group-badge">👥</div>
                            ) : (
                                <div className="status-badge"></div>
                            )}
                        </div>
                        <div className="chat-info">
                            <h3>{item.Name || item.name}</h3>
                            <p>{item.last_time_connection}</p>
                        </div>
                    </Link>
                ))}
            </div>
            </div>
        </>
    )
}
