import React from 'react'

function ChatContainer(props) {
  return (
    <div>
        <div className='card w-100'>
                <div className="row vh-95">
                    <div className="d-flex flex-column col-12 col-lg-12 col-xl-12 chat-window">
{props.children}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ChatContainer