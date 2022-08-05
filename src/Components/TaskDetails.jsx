import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import Button from './Button'
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    const handleBackButtonClick = () => {
        navigate('/')
    }

    return(
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique et, deserunt commodi assumenda velit ratione architecto nostrum nam rem explicabo voluptate aut culpa, quidem perferendis. Deserunt dolores dolor magnam. Velit.</p>
            </div>
        </>
    )
}

export default TaskDetails