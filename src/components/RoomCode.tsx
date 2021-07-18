import copyImg from "../assets/images/copy.svg"

import "../styles/room-code.scss"

type RoomCodeTypes = {
    code: string;
}

export default function RoomCode(props: RoomCodeTypes){

    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room cod" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}