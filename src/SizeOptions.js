const SizeOptions = (props) => {
	const options = props.options.map(e => {
		return <option value={e.value}>{e.label}</option>
	});
	return (
		<div>
			<select name={props.name} id={props.id}>
				{options}
			</select>
		</div>
	)
}

export default SizeOptions;