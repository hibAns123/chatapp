import React from 'react'

function ChatHeader({user}) {
  return (
    <div>
        <div className="align-items-start py-2 px-4 w-100 border-bottom d-lg-block sticky-top bg-white">
          <div className="d-flex align-items-center py-1">
            <div className="position-relative">
              <img src="1.png" alt={user.username} width='40px' height="40px" className='rounded-circle mx-2'/>
            </div>
            <div className="flex-grow-1">
              <strong>Logged in as {user.username}</strong>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChatHeader