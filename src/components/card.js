export default class Card {
	constructor(profile) {
		this.profile = profile;
		this._element = document.createElement('div');
		this._element.classList.add('card');
		this.render();
	}
	render() {
		this.renderByDomMethods();
	}
	renderByDomMethods() {


		const cardInner = document.createElement('div');
		cardInner.classList.add('card-inner');

		const thumbCont = document.createElement('div');
		thumbCont.classList.add('thumbnail-container');

		const thumbImg = document.createElement('img');
		thumbImg.src = window._getThumbnailURL(this.profile.thumbnail);
		thumbImg.title = this.profile.icaName;


		const fullnameElem = document.createElement('h2');
		fullnameElem.innerText = this.profile.icaName;

		const jobTitleElem = document.createElement('h3');
		jobTitleElem.innerText = this.profile.title;

		const bioElem = document.createElement('p');
		bioElem.classList.add('bio');
		bioElem.innerText = this.profile.bioShort;


		const contactBtn = document.createElement('a');
		contactBtn.classList.add('contact', 'btn');
		contactBtn.innerText = "Contact";
		contactBtn.href = `mailto:${this.profile.email}`;

		thumbCont.appendChild(thumbImg);
		cardInner.appendChild(thumbCont);
		cardInner.appendChild(fullnameElem);
		cardInner.appendChild(jobTitleElem);
		cardInner.appendChild(bioElem);
		cardInner.appendChild(contactBtn);

		this._element.appendChild(cardInner);
	}
	renderByTemplate() {

	}
	convertTemplate() {

		return new Function('state', 'return `' + cardHtml + '`;')({profile});
	}
	get element() {
		return this._element;
	}
}
