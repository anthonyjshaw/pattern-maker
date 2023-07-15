import { useState } from "react";
import Button from "./Button";
import TemplateOption from "./TemplateOption";
import Tooltip from "./Tooltip";
import SizeOptions from "./SizeOptions";



const App = () => {
	const [picture, setPicture] = useState({
		name: 't-shirt',
		image_src: '/t-shirt.svg'
	});
	function handleClick(e) {
		setPicture({name: e.target.dataset.imgSrc, image_src: e.target.src});
	}
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
		{	name: 'shirt',
			icon: '/shirt.svg'
		}
	].map(e => <TemplateOption icon={e.icon} text={e.name} className={'template-option-img'} alt={`SVG of ${e.name}`} onClick={handleClick} key={e.name} tooltip={<Tooltip text={e.name}/>}/>)
	return (
		<div>
   <h1>Fashion app</h1>
   <div className="container">
      <div className="picture">
		<div>
			<h2>Completed design</h2>
		</div>
         <div id="main-image-container" className="main-image-container">
            <img src={`${picture.image_src}`} alt={`Image of ${picture.name}`} className="picture-item"/>
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
         <hr/>
         <div>
            <h2>Select size</h2>
            <div className="size-options">
				{<SizeOptions options="M"/>}
            </div>
            <div>
               <h3>Advanced</h3>
               <div>
                  <input type="text"/>
               </div>
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