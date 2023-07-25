const Carousel = (props) => {
	const spanStyle = {
		margin: '0px 8px'
	}
	return (
		<div>
			<h3>{props.option}</h3> 
			<span style={spanStyle} onClick={props.handleClickBackward}>{"<"}</span>
			<span style={spanStyle} onClick={props.handleClickForward}>{">"}</span>
		</div>
	);
}

export default Carousel;