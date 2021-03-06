import logoimg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import RoomCode from '../components/RoomCode'
import {useParams} from 'react-router-dom'

import '../styles/room.scss'
import { FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'

type RoomParams = {
    id: string
}

export default function AdminRoon() {
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState("")
    const {user, signinWithGoogle} = useAuth()

    const roomId = params.id

    const {title, questions} = useRoom(roomId)

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoimg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}