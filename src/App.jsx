import { Route, Routes } from "react-router"
import { useState } from "react"
import Navbar from './Components/Navbar'
import ChatList from './Components/ChatList'
import ChatWindow from './Components/ChatWindow'
import ProfilePanel from './Components/ProfilePanel'
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen"
import LoginScreen from "./Screens/LoginScreen/LoginScreen"
import ContactsContextProvider from "./Context/ContactsContext"
import './App.css'

function App() {
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [showChatListMobile, setShowChatListMobile] = useState(false)

    return (
        <div className="app-wrapper">
            <ContactsContextProvider>
                <Routes>
                    <Route
                        path='/'
                        element={<LoginScreen />}
                    />
                    <Route
                        path='/chat'
                        element={
                            <div className="app-layout">
                                <Navbar setShowChatListMobile={setShowChatListMobile} />
                                <ChatList isModalOpen={showChatListMobile} setIsModalOpen={setShowChatListMobile} />
                                <div className="empty-chat">
                                    <div className="empty-state">
                                        <img src="/Images/logo fenixtalk.png" alt="Fenixtalk Logo" className="logo-fenixtalk" />
                                        <p>Bienvenidos a SkyChat</p>
                                        <p>Seleccionar un contacto para comenzar a chatear</p>
                                    </div>
                                </div>
                                <div className="empty-profile"></div>
                            </div>
                        }
                    />
                    <Route
                        path='/chat/:contact_id'
                        element={
                            <div className="app-layout">
                                <Navbar setShowChatListMobile={setShowChatListMobile} />
                                <ChatList isModalOpen={showChatListMobile} setIsModalOpen={setShowChatListMobile} />
                                <ChatWindow setShowProfileModal={setShowProfileModal} />
                                <ProfilePanel isModalOpen={showProfileModal} setIsModalOpen={setShowProfileModal} />
                            </div>
                        }
                    />
                    <Route
                        path='/login'
                        element={<LoginScreen />}
                    />
                    <Route
                        path='*'
                        element={<ErrorNotFoundScreen />}
                    />
                </Routes>
            </ContactsContextProvider>
        </div>
    )
}

export default App
