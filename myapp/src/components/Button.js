const Button = (props) => { //handleClick нужно достать из props
	const { handleClick } = props; // handleClick нужно передать в button в app
	return (
		<div>
			<button className='counter-button' onClick={handleClick}>Click!</button>
		</div>
	)
}

export default Button
