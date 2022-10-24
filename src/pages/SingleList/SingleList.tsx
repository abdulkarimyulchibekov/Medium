import React from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../../components/Item/Item';
import { IData, IList } from '../../Data/Interfaces';
import { useListsStore } from '../../Data/ListsStore';

export const SingleList = () => {
	const { id } = useParams();
	const lists = useListsStore((state: any) => state.listsStore);
	const list: IList = lists.find((e: IList) => e.id === Number(id));

	return (
		<>
			{list.stories?.length ? (
				<ul>
					{list?.stories.map((e: IData) => (
						<Item key={e.id} e={e} />
					))}
				</ul>
			) : (
				<p className='saved__error'>
					You Have not got any Article in this list
				</p>
			)}
		</>
	);
};
