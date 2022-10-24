import { List } from '@mui/material';
import { useDataStore } from '../../Data/DataStore';
import { IData } from '../../Data/Interfaces';
import { Item } from '../Item/Item';

export const HomeForYou = () => {
	const data = useDataStore((state: any) => state.data);
	return (
		<div>
			{data.length ? (
				<List>
					{data.map((e: IData) => (
						<Item key={e.id} e={e} />
					))}
				</List>
			) : (
				<p className='saved_error'>
					505 Error No Data or InterNet Please Check Your Connection
				</p>
			)}
		</div>
	);
};
