import React from 'react'
import './SwipeButtons.css'

export default function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <h2><i class="bi bi-arrow-counterclockwise bsButton text-warning"></i></h2>
        <h2><i class="bi bi-x-lg bsButton text-danger"></i></h2>
        <h2><i class="bi bi-star-fill bsButton text-primary"></i></h2>
        <h2><i class="bi bi-heart-fill bsButton text-success"></i></h2>
        <h2><i class="bi bi-lightning-fill bsButton text-info"></i></h2>
    </div>
  )
}
