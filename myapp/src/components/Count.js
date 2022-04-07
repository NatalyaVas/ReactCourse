import React from "react";

const Count = (props) => {
	const { value } = props;
	return <div>
		<span className='counter'>Count:{value}</span>
	</div>
}

export default Count