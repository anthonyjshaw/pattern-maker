import { useState } from "react";
import Button from "./Button";
import TemplateOption from "./TemplateOption";
import Tooltip from "./Tooltip";
import SizeOptions from "./SizeOptions";
import { PatternOptions } from "./PatternOptions";

const tShirt = require("./lib/pattern_options/t-shirt.json");
const trousers = require("./lib/pattern_options/trousers.json");
const sweatshirt = require("./lib/pattern_options/sweatshirt.json")

console.log(tShirt);

const App = () => {
	const [picture, setPicture] = useState({
		name: 't-shirt',
		image_src: '/t-shirt.svg'
	});

	const [patternOptionValues, setPatternOptionValues] = useState([
		"t-shirt"
	])

	const patternOptionsArray = [tShirt, trousers, sweatshirt].map(e => {
		return <PatternOptions key={e.pattern_name} name={e.pattern_name} elements={e.elements} />
	});

	console.log(patternOptionsArray)
	const patternOption = patternOptionsArray.find(e => e.props.name === picture.name)

	
	function handleClick(e) {
		setPicture({ name: e.target.dataset.imgSrc, image_src: e.target.src });
	}
	const sizes = [
		{
			"label": "XS",
			"name": "xs"
		},
		{
			"label": "S",
			"name": "s"
		},
		{
			"label": "M",
			"name": "m"
		},
		{
			"label": "L",
			"name": "l"
		},
		{
			"label": "XL",
			"name": "xl"
		},
		{
			"label": "XXL",
			"name": "xxl"
		}
	];
	const templateOptions = [
		{
			name: 't-shirt',
			icon: "/t-shirt.svg"
		},
		{
			name: 'trousers',
			icon: '/trousers.svg'
		},
		{
			name: 'sweatshirt',
			icon: '/sweatshirt.svg'
		},
		{
			name: 'jacket',
			icon: '/jacket.svg'
		},
		{
			name: 'dress',
			icon: '/dress.svg'
		},
		{
			name: 'skirt',
			icon: '/skirt.svg'
		},
		{
			name: 'shirt',
			icon: '/shirt.svg'
		}
	].map(e => <TemplateOption icon={e.icon} text={e.name} className={'template-option-img'} alt={`SVG of ${e.name}`} onClick={handleClick} key={e.name} tooltip={<Tooltip text={e.name} />} />);
	return (
		<div>
			<h1>Fashion app</h1>
			<div className="container">
				<div className="picture">
					<div>
						<h2>Completed design</h2>
					</div>
					<div id="main-image-container" className="main-image-container">
						<img src={`${picture.image_src}`} alt={`Image of ${picture.name}`} className="picture-item" />
					</div>
					<div>
						<h3>Front</h3>
					</div>
				</div>
				<div className="side-panel">
					<h2>Select template</h2>
					<div className="template-options-grid">
						{templateOptions}
					</div>
					<hr />
					<div>
						<h2>Select size</h2>
						<div className="size-options">
							{<SizeOptions options={sizes} id="sizes" />}
						</div>
						<div>
							<h3>Advanced</h3>
							<div id="advanced-pattern-options">
								{patternOption}
							</div>
						</div>
					</div>
					<hr />
					<div>
						<Button text="Print" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;