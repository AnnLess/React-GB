export function Message({message}) {
    return (
        <div class=" message__wrapper">
            <h3 class= "message-text">{message.message}</h3>
            <p class= "message-author">{message.author}</p>
        </div>
    )
};