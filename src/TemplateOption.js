import { useState } from "react";

const TemplateOption = (props) => {
	const [opacity, setOpacity] = useState('')

	function handleMouseOver(_) {
		setOpacity('opacity');
	}

	function handleMouseOut(_) {
		setOpacity('')
	}
	return (
		<div className="template-option" >
			<div className="image-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				<img src={`${props.icon}`} onClick={props.onClick} alt={`${props.alt}`} className={props.className} data-img-src={props.text}/>
			</div>
			<div className={`tooltip-container ${opacity}`}>
				{props.tooltip}
			</div>
		</div>
	)
}

export default TemplateOption;