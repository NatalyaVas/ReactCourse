import './App.scss';
import React, {useEffect, useState} from "react";
import {AUTHOR} from "./constants/common";
import TextField from '@mui/material/TextField';
import {Fab, useTheme} from '@mui/material';
import {Send} from '@mui/icons-material';
import Messages from "./components/Messages";
import ChatList from "./components/ChatList";

function App() {
	const theme = useTheme();
	const [messageList, setMessageList] = useState([]);
	const [value, setValue] = useState('')
	// const onKeyDown = (event) => {
	// 	setValue(event.target.value);
	// }
	
	const handleChange = (event) => {
		setValue(event.target.value);
	}
	
	const handleClick = () => {
		if (value !== ''){
			const newMessage = { text: value, author: AUTHOR.me };
			setMessageList([...(messageList || []), newMessage]);
			setValue('');
		}
	}
	
	useEffect(() => {
		let timerId;
		if (messageList?.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
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
				<h3>Список chats: </h3>
				<ChatList/>
				<h3>Список сообщений: </h3>
				<br/>
				<Messages messages={messageList} />
				<div className={'controlPanel'}>
					<TextField
						placeholder={'Введите сообщение'}
					   	type="text"
					   	value={value}
					   	onChange={handleChange}
						autoFocus
					/>
					<Fab
						style={{
							backgroundColor: theme.palette.primary.main
						}}
						onClick={handleClick}
						color="primary"
						aria-label="add">
						<Send />
					</Fab>
				</div>
			</header>
		</div>
	);
}

export default App;