import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './Context'


export default function Modal() {
    const { isModalOpen, toggleModal } = useAppContext()
    return (
        <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
            <div className="modal-container">
                <h3>Modal Container</h3>
                <button onClick={toggleModal} className="close-modal-btn">
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}
