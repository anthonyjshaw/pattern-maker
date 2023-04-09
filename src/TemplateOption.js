const TemplateOption = (props) => {

	function handleMouseOver(event) {

	}
	return (
		<div className="template-option" onClick={props.onClick} onMouseOver={handleMouseOver}>
			{props.icon}
		</div>
	)
}

export default TemplateOption;