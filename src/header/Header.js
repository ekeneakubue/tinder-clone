import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='container'>
        <ul className='mynav'>
            <li><h1><i class="bi bi-person-fill"></i></h1></li>
            <li><h1><i class="bi bi-fire text-danger"></i></h1></li>
            <li><h1><i class="bi bi-chat-text-fill"></i></h1></li>            
        </ul>
    </div>
  )
}
