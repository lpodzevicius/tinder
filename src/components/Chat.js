const Chat = ({ descendingOrderMessages }) => {
    return (
        <>
            <div className="c-display">
                {descendingOrderMessages.map((message, _index) => (
                    <div key={_index}>
                        <div className="c-message-header">
                            <div className="img-container">
                                <img src={message.img} alt={message.name + ' profile'} />
                            </div>
                            <p>{message.name}</p>
                        </div>
                        <p>{message.message}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Chat