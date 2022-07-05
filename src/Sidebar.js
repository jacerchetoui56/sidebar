import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import { appContext } from './Context'

export default function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useContext(appContext)

    return (
        <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} alt="" />
                <button onClick={toggleSidebar} className="close-btn">
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {
                    links.map(link => {
                        const { id, url, text, icon } = link
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {icon}
                                    {text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="social-icons">
                {
                    social.map(social => {
                        const { id, url, icon } = social
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {icon}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}
