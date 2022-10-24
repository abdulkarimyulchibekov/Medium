import { ListsItem } from '../../components/ListsItem/ListsItem';
import { SaveHeader } from '../../components/SaveHeader/SaveHeader';
import { IData } from '../../Data/Interfaces';
import { useListsStore } from '../../Data/ListsStore';

export const SaveMain = () => {
	const lists = useListsStore((state: any) => state.listsStore);

	return (
		<div>
			{lists?.length ? (
				<>
					<ul>
						{lists.map((e: IData) => (
							<ListsItem key={e.id} e={e} />
						))}
					</ul>
				</>
			) : (
				<p className='saved__error'>You haven't got any saved List </p>
			)}
		</div>
	);
};
