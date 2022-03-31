import logo from './logo.svg';
import './App.scss';
import Example from "./Example";
import Message from "./Message";
import AFew from "./AFew";
import React from "react";

function App(props) { // { name: 'Ivan' }
	// const topPosition = '40px';
	const isGrey = `App-header ${props.showRed ? 'header-grey' : 'header-blue'}`;
	const addText = 'Привет, Роман! Боюсь, что не осилю React, но все-таки изучаю и надеюсь на успешное окончание курса)'
	
	return (
		
		// <div className="App" style={{ paddingTop: '25px' }}>
		//   <div className={"App"} style={{ top: topPosition }}>
		<div
			className={"App"}
			style={{ top: props.topPosition || '20px', position: 'relative'}}>
			<header className={isGrey}>
			
			{/* className={ `App-header ${props.showRed ? 'header-red' : 'header-blue'}` }*/}
				Hello, {props.name}
				<Message text={addText} className={"Message"}/>
				<Example />
				<AFew />
			</header>
		</div>
	);
}

export default App;
