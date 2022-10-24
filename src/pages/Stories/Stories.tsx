import React from 'react';
import { List } from '@mui/material';
import { IData } from '../../Data/Interfaces';
import { Item } from '../../components/Item/Item';
import { useMyStore } from '../../Data/MyStore';

export const Stories = () => {
	const myStore = useMyStore((state: any) => state.myStore);
	return (
		<div>
			{myStore.length ? (
				<List>
					{myStore.map((e: IData) => (
						<Item key={e.id} e={e} />
					))}
				</List>
			) : (
				<p className='saved__error'>You have not published any article</p>
			)}
		</div>
	);
};
