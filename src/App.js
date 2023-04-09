import { useState } from "react";
import Button from "./Button";
import TemplateOption from "./TemplateOption";

const App = () => {
	const [picture, setPicture] = useState({})
	function handleClick(e) {
		console.log(picture)
		setPicture(e.target.value);
	}
	const templateOptions = [
		't-shirt', 
		'trousers', 
		'sweatshirt', 
		'jacket',
		'dress',
		'skirt',
		'shirt'
	].map(e => <TemplateOption onClick={handleClick} key={e}/>)
	return (
		<div>
			<h1>Fashion app</h1>
			<div className="container">
				<div className="picture">
					<h2>Completed design</h2>
				</div>
				<div className="side-panel">
					<h2>Select template</h2>
					<div className="template-options-grid">
						{templateOptions}
					</div>
					<hr/>
					<div>
						<h2>Select size</h2>
						<div className="size-options">
							
						</div>
						<div>
							<h3>Advanced</h3>
						</div>
					</div>
					<hr/>
					<div>
						<Button text="Print"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;