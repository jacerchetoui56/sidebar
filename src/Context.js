import React, { useContext, useState } from "react";


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


// ! make sure a name it as follow ==> use[blabla] because you can't call a hook in a regular function
export const useAppContext = () => {
    return useContext(appContext)
}


export { appContext, AppProvider }