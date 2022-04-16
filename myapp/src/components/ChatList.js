const ChatList = () => {
	
	const chats = [
		{
			id: 1,
			name: Me
		},
		{
			id: 2,
			name: Bot
		}
	]
	
	const blockChats = chats.map((element) => {
		return (
			<div key={index} id={element.id}>
				<h3>{element.name}</h3>
			</div>
		)
	})

	return (
		<>
			{blockChats}
		</>
	)
}

export default ChatList;

// {messages.map((message, index) => (
// 	<div key={index}>
// 		<p>{message.text}</p>
// 		<sup>{message.author}</sup>
// 	</div>
//
// ))}