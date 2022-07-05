import React, { useState } from "react";


const appContext = React.createContext()

function AppProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <appContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                toggleSidebar,
                toggleModal
            }}
        >
            {children}
        </appContext.Provider>
    )
}


export { appContext, AppProvider }