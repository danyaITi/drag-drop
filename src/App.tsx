import './styles/app.scss';
import Item from './components/Item';

import { useDrag } from './hooks/useDrag';

const App = () => {

	const {
		handleDragOver, 
		handleOnDrop, 
		handleOnDrag, 
		items
	} = useDrag();

  return (
    <div className="app">
		<div className="sidebar">
			<h5>Sidebar</h5>

			<div className='elements'>
				<span 
					draggable 
					onDragStart={(e)=> handleOnDrag(e, 'text')}
				>
					Text
				</span>
				
				<img 
					onDragStart={(e)=> handleOnDrag(e, 'image')} 
					src='https://velo1000.ru/local/templates/velo1000/images/no-img.png' 
					height={100}
					alt="no_image" 
				/>
			</div>
				
		</div>
		

		<div className="workarea">
			<h5>Workarea</h5>

			<div className='card' onDrop={handleOnDrop} onDragOver={handleDragOver}>
				{items.map((item)=>(
					<Item el={item}/>
				))}
			</div>
			
		</div>
    </div>
  );
}

export default App;
