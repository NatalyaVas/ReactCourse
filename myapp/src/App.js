import './App.scss';
import React, {useEffect, useState} from "react";
import {AUTHOR} from "./constants/common";

function App() {
	const [messageList, setMessageList] = useState([]);
	const [value, setValue] = useState('')
	// console.log('message ------------');
	
	const handleChange = (event) => {
		setValue(event.target.value);
	}
	
	const handleClick = () => {
		if (value !== ''){
			const newMessage = { text: value, author: AUTHOR.me };
			setMessageList([...messageList, newMessage]);
		}
	}
	
	useEffect(() => {
		let timerId;
		if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
			timerId = setInterval(() => {
				setMessageList([...messageList, newMessage]);
			}, 1500);
			const newMessage = { text: 'Привет! Я - бот!', author: AUTHOR.bot }
		}
		return () => {
			clearInterval(timerId);
		}
	},[messageList])
	
	return (
		<div className='App'>
			<header className='App-header'>
				<h3>Список сообщений: </h3>
				<br/>
				{messageList.map(message => (
					<div>
						<p>{message.text}</p>
						<sup>{message.author}</sup>
					</div>
					)
				)} {/*render of map*/}
				<div>
					<input
						placeholder={'Введите сообщение'}
					   	type="text"
					   	value={value}
					   	onChange={handleChange}
					/>
					<button onClick={handleClick}>Отправить</button>
				</div>
			</header>
		</div>
	);
}

export default App;