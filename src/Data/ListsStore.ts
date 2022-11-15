import create from 'zustand';
import { IData, IList } from './Interfaces';

let id = 1;

let listsStore: any = (set: any) => ({
	listsStore: [
		{
			title: 'Reading List',
			stories: [],
			id: id,
		},
	],
	addListsStore: (data: any) =>
		set((state: any) => {
			id = id + 1;
			data.id = id;
			return {
				listsStore: [...state.listsStore, data],
			};
		}),
	addArticleToList: (data: IData, listTitle: string) =>
		set((state: any) =>
			state.listsStore.map((e: IList) => {
				if (e.title === listTitle) {
					if (!e.stories?.includes(data)) {
						return e.stories?.push(data);
					}
				} else {
					return e;
				}
			}),
		),
	deleteListsStore: (arr: IList[]) => set(() => ({ listsStore: arr })),
	deleteArticleInTheList: (arr: IData[], title: string) =>
		set(
			(state: any) =>
				(state.listsStore.find((el: IList) => el.title === title).stories =
					arr),
		),
});

id = id + 1;

export const useListsStore = create(listsStore);
