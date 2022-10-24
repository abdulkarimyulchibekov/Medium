import create from 'zustand';
import { IData } from './Interfaces';

let dataStore: any = (set: any) => ({
	data: [
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
			image1: 'https://miro.medium.com/max/720/1*Bvl3W6068UsNB9n6cUwF6g.png',
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
			image1: 'https://miro.medium.com/max/828/1*2IjWavPYnLqdEHOkQ-w_QQ.jpeg',
			image2: 'https://miro.medium.com/max/828/0*ijVLneZpQFKIwgog.jpeg',
			name: 'Julian',
			date: 'May 10',
			topic: 'Habits',
			read: '6 min read',
			saved: false,
		},
		{
			id: 3,
			title: '6 Passive Income Ideas For Software Developers',
			first_subtitle:
				'Easy ideas to get you started with generating passive income online.',
			first_content: [
				'Everyone dreams about generating passive income without having to work much for a living.',
				'But creating passive income streams that can generate significant money is not easy. It’s gonna take a lot of dedication and hard work in the beginning. But it can be totally worth it in the long term.',
				'There are so many blog writers and YouTubers who put in years of hard work to see their work paying off only after a couple of years. But it’s a powerful thing once it starts generating income without them having to work much.',
				'Software development is a great skill. The skill provides abundant opportunities to make money online.',
			],
			second_subtitle: 'Info Products:',
			second_content: [
				'More and more people are creating info products like e-books, video courses, website themes, etc now which keep making money while they sleep.',
				'The eBooks need not be a typical 300-page in-depth guide. It can be as simple as 50 pages of an actionable guide.',
				'You can also make a simple video recording of yourself sharing knowledge on a topic that others don’t know about. People love paying on the internet for learning skills or gaining knowledge that others have.',
				'Simple info products like these can sell for around 15$–25$ easily. If you think the quality of your product is really good, you can sell it for a lot more too.',
			],
			image1: 'https://miro.medium.com/max/1400/0*3EHoWHThJyvX4Mdm',
			image2: 'https://miro.medium.com/max/828/0*gdxCp1S0jy26nSoZ',
			name: 'Stafan Korshak',
			date: '6 hours ago',
			topic: 'For Software Devs',
			read: '10 min read',
			saved: false,
		},
		{
			id: 4,
			title: 'The ending of Product Management',
			first_subtitle:
				'We are near the last days of Product Management. Does that mean you should think about changing careers?',
			first_content: [
				'I’m a major in International Relations, and the one thing we are groomed to be good at is building scenarios and projections. Beyond the amazing work it does to my anxiety every time I see something about nuclear warheads on the news, it also serves to anticipate a lot when it comes to my personal life.',
				'One scenario I’ve been building up in my head during the past month is “when will I be obsolete?” It has happened to almost every profession in history: Typewriters, secretaries, tailors… The world turns, things change and people are left behind, that’s life.',
				'The more I ponder about this question, the more I believe we are living the last days of Product Management zenith. The natural follow-up question that arises is “then what?”. Will my position be transformed? Will I have to change careers?',
				'Let me share some of my considerations on why the end is nigh and what we should be doing about it.',
			],
			second_subtitle: 'The winds of change',
			second_content: [
				'Revolutions begin silently. Most times than not, when people realize what is happening, it’s already too late. Things that seem to be irrelevant at first sight are often the indicators of change that people ignored. Here are three things I believe that are marking the end of Product Management:',
				'What!? global finance has an impact on my life?! Shocking, right? I won’t delve too deep on the subject, but what you must understand is this: after Covid, inflation is rampant on the world and federal banks are increasing interest rates everywhere. When interest rates are high, the capital doesn’t need to take as much risk to receive payback, it can just chill at the bank. If the capital stays at the bank, startups lose their main source of income: investment. Without the hungry startups and their scale-up mindset, Product Culture as we know it receives a blow.',
				'Most of Product Management relies on the fact that the user has to consume the product from us. Call it “digital” as much as you want, but selling an app is not inherently different from selling a shoe: a single provider is delivering value for buck to a single user. With the decentralization of internet, the lines between customer and provider are blurred. In that same way, the metaverse blurs the line between physical and digital. We are at the threshold of a change in how we deal with… well, reality. It will be so intense that it’s impossible to predict the consequences. The only thing that is sure is that it will bring consequences.',
				'The first people to learn Product Management from Ries, Cagan or Moore paved the way. They were close to the source, both in terms of reference and substance. More than 20 years after the birth of the movement, Product Management became less of a culture and more of a profession… a very well payed profession. People flock to the career in droves under promises of growth and high pays with relatively low effort. There can only be so much demand for so many people, and even worse, we are reproducing lessons from biases built on top of the original material. The updates to the craft are far slower then the expansion of the market.',
			],
			image1: 'https://miro.medium.com/max/720/1*yiWrf9-u1zz0zAhsKGrd3g.jpeg',
			image2: 'https://miro.medium.com/max/720/1*xtUM-tls51UlCEW6lk6L9A.png',
			name: 'Thomas G',
			date: 'Aug 4',
			topic: 'Product Management',
			read: '4 min read',
			saved: false,
		},
		{
			id: 5,
			title:
				'Ancient Rome Did Not Fall: Why the Real Story is Even Scarier for America',
			first_subtitle:
				'Many who argue that America is in decline like to point to a perceived parallel with the decline of Rome, where citizens went from ruling the world to surviving by eating mouse dung and weeds in the streets.',
			first_content: [
				'They are pointing to the wrong flaw, and if their lesson is heeded, America will indeed be in trouble.',
				'The alleged script goes like this: After a series of remarkable conquests, when Rome ruled the world, it came to rely on ‘foreign’ armies for its power. These armies killed Rome.',
				'Only it didn’t. It didn’t fall at all. And that is the more serious comparison with America. The Western Roman Empire declined gently into insignificance. It did not fall; it faded.',
				'The Huns were horse warriors of central Asia; an early version of the fearsome Mongol tribes. They learned horsemanship at age three when their faces were cut with a sword to teach them to endure pain. To create a fearsome appearance they put binders on their children’s heads, which gradually deformed their skulls and gave them a menacing look. They swept into Europe and crushed the Germanic tribes, the Goths, by 400 AD.',
			],
			second_subtitle: '',
			second_content: [
				'By 451, they had an immense army gathered on the plains of France at Chalons, east of Paris, facing the Romans. The Visigoths, or Western Goths, were allied with the Romans under their general Aetius. Three invincible armies, churning up the dust. It was Game of Thrones, Master Class.',
				'Rome did not fall by conquest. It was instead sacked ten years later by Rome’s allies the Visigoths under king Alaric, who was infuriated by a failed Roman assassination attempt.',
				'So why does everyone think that Rome fell in 476?',
				'Because of a propaganda campaign launched by the Eastern Roman Empire!.',
			],
			image1: 'https://miro.medium.com/max/640/1*UY1krHbt8G0CT4x4G4JzKw.png',
			image2: 'https://miro.medium.com/max/412/1*lc9d7cbIvYDkIX-0yRpbBA.png',
			name: 'Renuka Gavrani',
			date: 'Oct 3',
			topic: 'History',
			read: '1 min read',
			saved: false,
		},
		{
			id: 6,
			title: 'What are the Highest Paying Programming Languages in 2022?',
			first_subtitle:
				'This article analyses data from 5,508 software engineering job listings to help you figure out which programming languages have the highest salary.',
			first_content: [
				'Software engineers are spoiled for choice when it comes to the variety of jobs available to them at the moment. Almost every industry needs programmers in some capacity, with jobs ranging from web development to ethical hacking. All that variety means there are big differences in pay and availability between different programming languages.',
				'We’ve analysed data from 5k job listings on RemoteOK (the worlds largest job board) to determine which programming languages are paid the most and the least.',
				'Let’s get started!',
			],
			second_subtitle: 'Which Programming Languages Pay The Most in 2022?',
			second_content: [
				'When searching for a programming language job, it’s important to compare the pay being offered by an employer to averages across the industry. Is the pay much higher than average? Much lower?_ Doing this will help you contextualize the job offer as you start weighing your options and choosing favorites.',
				'Based on the analysed jobs, Swift has the highest earning potential with median jobs paying around $116k, and frequently earning more than $170k per year. The programming language, which was developed by Apple, was also voted as the “most loved” language in a 2015 Stack Overflow survey.',
				'Based on the Stack Overflow 2021 developer survey, however — the numbers are a little different:',
				'These are all quite niche technologies however which have few jobs — it’s a trade off between niche specialism and salary.',
			],
			image1: 'https://miro.medium.com/max/750/0*QBUoHr8YjU-Szt2y.png',
			image2: 'https://miro.medium.com/max/828/0*H1s4fpKEKj9eu231.png',
			name: 'Nitin Shavra',
			date: 'May 4',
			topic: 'Languages',
			read: '15 min reads',
			saved: false,
		},
	],
	addData: (data: IData) =>
		set((state: any) => ({ data: [...state.data, data] })),
	deleteData: (arr: IData[]) => set((state: any) => ({ data: arr })),
});

export const useDataStore = create(dataStore);
