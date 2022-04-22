import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import {AUTHOR} from "../constants/common";
import {useState} from "react";

const initialChats = {
	id1: {
		name: 'Сhat 1',
		message: [
			{ text: 'Message 1', author: AUTHOR.bot },
			{ text: 'Hi', author: AUTHOR.me }
		]
	},
	id2: {
		name: 'Сhat 2',
		message: [
			{ text: 'Message from chat 2', author: AUTHOR.me }
		]
	}
};

const Router = () => {
	const [chats] = useState(initialChats);
	
	// const addMessage = (chatId, message) => {
	// 	setChats({...chats})
	
	return (
		<BrowserRouter>
			<ul className={'menu'}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/profile'>Profile</Link>
				</li>
				<li>
					<Link to='/chats'>Chats</Link>
				</li>
			</ul>
			
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/chats:chatId" element={<Chats chats={chats}/>} />
				<Route path="*" element={<Chats chats={chats}/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;