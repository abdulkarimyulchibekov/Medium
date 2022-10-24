import { Route, Routes } from 'react-router-dom';
import { SaveHeader } from '../../components/SaveHeader/SaveHeader';
import { SaveMain } from '../../layouts/SaveMain/SaveMain';
import { SaveSecondary } from '../../layouts/SaveSecondary/SaveSecondary';
import './save.scss';

export const Save = () => {
	return (
		<>
			<SaveHeader />
			<Routes>
				<Route index element={<SaveMain />} />
				<Route path='highlights' element={<SaveSecondary />} />
			</Routes>
		</>
	);
};
