import { AVATAR } from "./constants"

export const createMessageArray = (prevState, userType, message) => {
    return [...prevState, {
        idx: prevState.length === 0 ? 1 : prevState[prevState.length - 1]?.idx + 1,
        from: userType,
        message: message,
        avatar: AVATAR[userType],
        timestamp: new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric",
        })
    }]
}