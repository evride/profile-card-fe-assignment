import Card from './components/card';

export default class App {
	constructor(elem, dataUrl) {
		this.element = elem;
		this.slot = this.element.querySelector('main.card-container');
		this.data;
		this.loadData(dataUrl);

	}
	loadData(url) {
		fetch(url)
			.then((res) => res.json())
			.then((data) => this.setData(data));
	}
	setData(data) {
		data.users.sort((a, b) => {
			if (a.teamName === b.teamName) {
				return a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0;
			}
			return a.teamName < b.teamName ? -1 : a.teamName > b.teamName ? 1 : 0;
		});
		this.data = data.users;
		this.render();
	}
	render() {
		this.data.forEach((profile) => {
			const card = new Card(profile);
			this.slot.appendChild(card.element);
		});
	}


}