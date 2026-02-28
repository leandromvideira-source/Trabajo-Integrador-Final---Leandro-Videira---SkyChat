import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

export const ContactsContext = createContext(
    
    {
        contacts: [],
        favorite_name: ''
    }
)

const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)

    const addMessage = (contactId, messageText) => {
        const newMessage = {
            id: Date.now(), // Simple ID generation
            Text: messageText,
            send_by_name: true, // Assuming sent by user
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            is_read: false
        }
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, messages: [...contact.messages, newMessage] }
                    : contact
            )
        )
    }

    const provider_values = {
        contacts: contactsState,
        favorite_name: 'pepe',
        addMessage
    }

    return ( 
        <ContactsContext.Provider 
            value={provider_values}
        >
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider