import React from 'react'
import './styles/FixedTopBtn.scss'

const FixedTopBtn = () => {
    return (
        <div className='FixedTopBtn'>
            <button
                className='top-btn'
                onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
            >
                위로 올라가는 버튼
            </button>
            <a href="#" className='talk-btn'>
                ADER
            </a>
            <p>
                1:1 talk
            </p>
        </div>
    )
}

export default FixedTopBtn