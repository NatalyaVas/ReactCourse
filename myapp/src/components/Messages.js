// import PropTypes from 'prop-types';

// const Messages = ({ messages = [] }) => {
const Messages = ({ messages }) => {
	
	return <>
		{messages.map((message, index) => (
			<div key={index}>
				<p>{message.text}</p>
				<sup>{message.author}</sup>
			</div>
		
		))}
	</>
}

export default Messages;

// Messages.defaultProps = {
// 	messages: []
// }
//Задаем значение по умолчанию -пустой массив

// Messages.propTypes = {
// 	messages: PropTypes.arrayOf
// 		(PropTypes.shape({
// 			text: PropTypes.string,
// 			author: PropTypes.string
// 	}))
// };
