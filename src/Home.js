import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { appContext } from './Context'

export default function Home() {
    const { isSidebarOpen, toggleSidebar } = useContext(appContext)
    const { isModalOpen, toggleModal } = useContext(appContext)

    return (
        <main>
            <button onClick={toggleSidebar} className="sidebar-toggle">
                <FaBars />
            </button>
            <button onClick={toggleModal} className="btn">
                Show Modal
            </button>
        </main>
    )
}
