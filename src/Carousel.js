const Carousel = (props) => {
	const option = props.option;
	return (
		<div>
			<h3><span onClick={props.backward}>{"<"}</span>{option}<span onClick={props.forward}>{">"}</span></h3> 

		</div>
	);
}

export default Carousel;