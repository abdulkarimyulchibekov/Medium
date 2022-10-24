import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Save } from './pages/Save/Save';
import { Stories } from './pages/Stories/Stories';
import { Publish } from './pages/Publish/Publish';
import { SinglePage } from './pages/SinglePage/SinglePage';
import { SingleList } from './pages/SingleList/SingleList';
import './App.scss';

function App() {
	return (
		<>
			<div className='App'>
				<Navbar />
				<div className='main'>
					<Routes>
						<Route path='/home' index element={<Home />} />
						<Route path='/saved' element={<Save />} />
						<Route path='/publish' element={<Publish />} />
						<Route path='/my-stories' element={<Stories />} />
						<Route path='/:id' element={<SinglePage />} />
						<Route path='/saved/:id' element={<SingleList />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
