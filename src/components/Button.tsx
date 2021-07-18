import {ButtonHTMLAttributes} from 'react'

import '../styles/button.scss'

type ButtonPops = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

export function Button({isOutlined = false, ...props}: ButtonPops) {
    return (
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props}
        />
    )
}