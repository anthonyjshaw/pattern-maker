import { useEffect, useState } from "react";
import Button from "./Button";
import TemplateOption from "./TemplateOption";
import Tooltip from "./Tooltip";
import SizeOptions from "./SizeOptions";
import { PatternOptions } from "./PatternOptions";
import Carousel from "./Carousel";

const tShirt = require("./lib/pattern_options/t-shirt.json");
const trousers = require("./lib/pattern_options/trousers.json");
const sweatshirt = require("./lib/pattern_options/sweatshirt.json");
const dress = require("./lib/pattern_options/dress.json");
const shirt = require("./lib/pattern_options/shirt.json");
const skirt = require("./lib/pattern_options/skirt.json");
const jacket = require("./lib/pattern_options/jacket.json");



const App = () => {
	useEffect(() => {
		setCarouselOption(carouselOptions[carouselIndex]);
	})
	const [patternOptionValues, setPatternOptionValues] = useState(
		"t-shirt"
	)
	const [carouselIndex, setCarouselIndex] = useState(0);
	const carouselOptions = ['Front', 'Back', "Left Side", "Right Side"];
	const patternOptionsArray = [tShirt, trousers, sweatshirt, dress, skirt, shirt, jacket].map(e => {
		return <PatternOptions key={e.pattern_name} name={e.pattern_name} elements={e.elements} />
	});
	const [carouselOption, setCarouselOption] = useState(carouselOptions[carouselIndex]);

	const [picture, setPicture] = useState({
		name: 't-shirt',
		image_src: `/${carouselOption.toLowerCase()}/t-shirt.svg`
	});
	const patternOption = patternOptionsArray.find(e => e.props.name === patternOptionValues)

	function handleClickPicture(e) {
		setPatternOptionValues(e.target.dataset.imgSrc)
		setCarouselIndex(0);

		setPicture({ name: e.target.dataset.imgSrc, image_src: `/front/${e.target.dataset.imgSrc}.svg` });
	}

	function handleClickCarouselForward(e) {
		if (carouselIndex >= carouselOptions.length - 1) {
			setCarouselIndex(0);
		} else {
			setCarouselIndex(carouselIndex + 1)			
		}
		setPicture({ name: e.target.dataset.imgSrc, image_src: `/${carouselOption.toLowerCase().replaceAll(' ', '-')}/${patternOptionValues}.svg` });
	}

	function handleClickCarouselBackward(e) {
		if (carouselIndex < 1) {
			setCarouselIndex(carouselOptions.length -1);
		} else {
			setCarouselIndex(carouselIndex - 1);
		}
		setPicture({ name: e.target.dataset.imgSrc, image_src: `/${carouselOption.toLowerCase().replaceAll(' ', '-')}/${patternOptionValues}.svg` });
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
			icon: "/front/t-shirt.svg"
		},
		{
			name: 'trousers',
			icon: '/front/trousers.svg'
		},
		{
			name: 'sweatshirt',
			icon: '/front/sweatshirt.svg'
		},
		{
			name: 'jacket',
			icon: '/front/jacket.svg'
		},
		{
			name: 'dress',
			icon: '/front/dress.svg'
		},
		{
			name: 'skirt',
			icon: '/front/skirt.svg'
		},
		{
			name: 'shirt',
			icon: '/front/shirt.svg'
		}
	].map(e => <TemplateOption icon={e.icon} text={e.name} className={'template-option-img'} alt={`SVG of ${e.name}`} onClick={handleClickPicture} key={e.name} tooltip={<Tooltip text={e.name} />} />);
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
						<Carousel option={carouselOption} handleClickForward={handleClickCarouselForward} handleClickBackward={handleClickCarouselBackward}/>
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