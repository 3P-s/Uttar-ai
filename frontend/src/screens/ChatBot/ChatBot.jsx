import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
const ChatBot = () => {
    return (
        <div className='flex'>
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default ChatBot
