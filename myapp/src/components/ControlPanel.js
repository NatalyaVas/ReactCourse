import TextField from "@mui/material/TextField";
import {Fab, useTheme} from "@mui/material";
import {Send} from "@mui/icons-material";
import React, {useEffect, useRef, useState} from "react";
import {AUTHOR} from "../constants/common";

const ControlPanel = () => {
	const [messageList, setMessageList] = useState([]);
	const inputRef = useRef();
	const theme = useTheme();
	const [value, setValue] = useState('')
	
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	const handleClick = () => {
		if (value !== '') {
			const newMessage = {text: value, author: AUTHOR.me};
			setMessageList([...(messageList || []), newMessage]);
			setValue('');
			inputRef.current?.focus();
		}
	};
	
	useEffect(() => {
		inputRef.current?.focus();
	}, []);
	
	useEffect(() => {
		let timerId;
		if (messageList?.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
			timerId = setInterval(() => {
				setMessageList([...messageList, newMessage]);
			}, 1500);
			const newMessage = {text: 'Привет! Я - бот!', author: AUTHOR.bot}
		}
		return () => {
			clearInterval(timerId);
		}
	}, [messageList]);
	
	return (
		<div>
			<div className={'controlPanel'}>
				<TextField
					inputRef={inputRef}
					placeholder={'Введите сообщение'}
					type="text"
					value={value}
					onChange={handleChange}
				/>
				<Fab
					style={{
						backgroundColor: theme.palette.primary.main
					}}
					onClick={handleClick}
					color="primary"
					aria-label="add">
					<Send/>
				</Fab>
			</div>
		</div>
	)
};

export default ControlPanel;