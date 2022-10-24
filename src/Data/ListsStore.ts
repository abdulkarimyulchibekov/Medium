import create from 'zustand';
import { IData, IList } from './Interfaces';

let id = 1;

let litsStore: any = (set: any) => ({
	listsStore: [
		{
			title: 'Reading List',
			stories: [
				{
					id: 1,
					title: 'YouTube is Dead and Something New is Replacing It',
					first_subtitle: 'It’s the next Myspace.',
					first_content: [
						'if I published this article as a video on YouTube it would have been demonetized. The title alone would be enough to set off YouTube’s algorithm that scours videos for anything too “controversial.”',
						'I’m not even trying to be controversial. I’m stating a fact. YouTube is dying. And it could very well become the next Myspace by 2030.',
						'I know what you’re thinking, “Myspace? No fucking way YouTube could become the next Myspace?!”',
						'But hear me out. The parameters for YouTube’s failure are exactly how they were for Myspace. Here’s why.',
					],
					second_subtitle: 'YouTube is Dead, Artistically and Creatively',
					second_content: [
						'YouTube is tantamount to MySpace in more ways than one.',
						'Before Myspace fell it had become entirely corporatized. The website featured ads and content from celebrities and Fortune 500 companies instead of the independent artists that made it what it was.',
						'This made it possible for Facebook to knock MySpace off its pedestal as it featured fewer ads and a much cleaner user interface.',
						'The same thing is happening to YouTube. The platform is a corporate wasteland filled with ads, clickbait, product placements, and it favors content from celebrities over independent users.',
					],
					image1:
						'https://miro.medium.com/max/720/1*Bvl3W6068UsNB9n6cUwF6g.png',
					image2: 'https://miro.medium.com/max/720/0*k3q1LXXpAzAA-VU1.jpg',
					name: 'Appiahyoofi',
					date: 'Jul 7',
					topic: 'You Tube',
					read: '4 min read',
					saved: false,
				},
				{
					id: 2,
					title: '4 Unsexy One-Minute Habits That Save Me 30+ Hours Every Week',
					first_subtitle:
						'These four, if practiced together, are genuinely a lethal combination that will kill procrastination.',
					first_content: [
						"When we look at these stats, it’s easy to think, “Wow! People waste so much time” as if we don't contribute to these stats. But we do. You’re a part of these. And so am I.",
						"And hence, it's better to accept that we don't lack time — but just that we waste most of it. Once you do that, you can do something about it: like incorporating tiny habits into your life that’ll save so much of your time. That’s what this article is about. Inculcate ALL 4 of these super-easy habits in your life, and I promise, the results will be extraordinary.",
						'Time-blocking is an easy time-management hack by Cal Newport that takes just a minute but leads to so much clarity in your day.',
						'The night before, simply divide the coming day into 30-minute blocks (or 5-minute blocks if you’re Elon Musk) and assign tasks to them. This is what it looks like.',
					],
					second_subtitle: '5–4–3–2–1: Eat the frog for breakfast!',
					second_content: [
						'“If it’s your job to eat a frog, it’s best to do it first thing in the morning. And If it’s your job to eat two frogs, it’s best to eat the biggest one first.”',
						'Eating the frog is basically doing the most challenging and dreaded task of the day. And while you’re time-blocking it the night before, it’s best to schedule it first thing in the morning.',
						'Also, use the 5-Second rule by Mel Robbins to help you further. The idea is to start counting backward — 5–4–3–2–1 — and physically push yourself to begin working at 1. Mel says, “If you get the instinct to work on a goal, you must physically move inside of 5 seconds, otherwise your brain will kill it.” So if you’re supposed to start eating your frog at 9 AM, at 8:59 go, “5–4–3–2–1: Eat the frog!” and just get to work.',
						'You’ve heard of visualization as a technique to improve your future. However, visualizing a bright future alone won’t do much if you’re not willing to dial it down to the present and inculcate the needful habits to convert those imaginations into reality',
					],
					image1:
						'https://miro.medium.com/max/828/1*2IjWavPYnLqdEHOkQ-w_QQ.jpeg',
					image2: 'https://miro.medium.com/max/828/0*ijVLneZpQFKIwgog.jpeg',
					name: 'Julian',
					date: 'May 10',
					topic: 'Habits',
					read: '6 min read',
					saved: false,
				},
			],
			id: id,
		},
	],
	// mashitta xato bor iltimos koddi clone qimela logikasi tugatilmagan
	addListsStore: (data: IData) =>
		set((state: any) => ({ listsStore: [...state.listsStore, data] })),
	deleteListsStore: (arr: IData[]) => set(() => ({ listsStore: arr })),
});

id = id + 1;

export const useListsStore = create(litsStore);
