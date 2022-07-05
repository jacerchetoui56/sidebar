import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from './Context'

export default function Home() {

    const { toggleModal, toggleSidebar } = useAppContext()

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
