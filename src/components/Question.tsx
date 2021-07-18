import "../styles/question.scss"
import {ReactNode} from 'react'

type QuestionType = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
}

export function Question({content, author, children}:QuestionType) {
    return (
        <div className="question">
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name}/>
                    <span>{author.name}</span>
                </div>
                <div className="">
                    {children}
                </div>
            </footer>
        </div>
    );
}