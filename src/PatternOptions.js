
export const PatternOptions = (props) => {
	const elements = props.elements.map(e => {
		if (Array.isArray(e.value)) {
			const options = e.value.map(subElement => {
				return <option key={subElement}>{subElement}</option>;
			});

			return <div><label>{e.name.replaceAll("_", " ")}</label><select>{options}</select></div>
		} else if (typeof e.value === 'number') {
			return <div><label>{e.name}</label><input type="number" name={e.name} id="" value={props.onChange}/></div>
		} else {
			return <input type="text" name={`${e.name}`} id=""/>
		}

	});

	return <div>
		<h3>{props.name}</h3>
		{elements}
	</div>;
	
}