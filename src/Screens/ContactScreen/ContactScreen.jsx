import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactScreen() {
    const { contacts } = useContext(ContactsContext)

    //Obtengo el id del contacto seleccionado a traves de los parametros de la url
    const { contact_id } = useParams()

    //Busco el contacto seleccionado en la lista de contactos
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

    return (
        <div className="app-container">
            <ContactSidebar />
            <div className="chat-area">
                {
                    !contact_selected
                        ? <div className="chat-header">El contacto seleccionado no existe</div>
                        : <>
                            <div className="chat-header">
                                {contact_selected.Name}
                            </div>
                            <div className="messages-container">
                                {
                                    contact_selected.messages.map(message => {
                                        return (
                                            <div key={message.id} className={`message ${message.send_by_name ? 'sent' : 'received'}`}>
                                                <div className="message-bubble">
                                                    <p>{message.Text}</p>
                                                    <div className="message-time">{message.created_at}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <form className="message-form">
                                <textarea className="message-input" placeholder='Escribe un mensaje...' />
                                <button className="send-button" type='submit'>Enviar</button>
                            </form>
                        </>
                }
            </div>
        </div>
    )
}