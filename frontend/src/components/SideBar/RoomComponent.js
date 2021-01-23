import React, {useEffect, useState, useRef} from "react"
import createSocketConnectionInstance, {reInitializeStream} from "./connection"

const RoomComponent = (props) => {
    const handleDisconnect = () => {
        socketInstance.current?.destoryConnection();
        props.history.push('/');
    }
    let socketInstance = useRef(null);
    useEffect(() => {
        startConnection();
    }, []);
    const startConnection = () => {
        let params = { quality: 12 }
        socketInstance.current = createSocketConnectionInstance({
            params
        });
    }
    const [mediaType, setMediaType] = useState(false);
    const toggleScreenShare = (displayStream) => {
        const { reInitializeStream, toggleVideoTrack } = socketInstance.current;
        displayStream === 'displayMedia' && toggleVideoTrack({
            video: false, audio: true
        });
        reInitializeStream(false, true, displayStream).then(() => {
            setMediaType(!mediaType)
        });
    }
    return (
        <React.Fragment>
                <div id="room-container"></div>
                <button onClick={handleDisconnect}>Disconnect</button>
                <button
                    onClick={() => reInitializeStream(mediaType ?
                        'userMedia' : 'displayMedia')}
                >
                    {mediaType ? 'screen sharing' : 'stop sharing'}</button>
            <button onClick={handleDisconnect}>Disconnect</button>
        </React.Fragment>
    )
}

export default RoomComponent;