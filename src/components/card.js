export default class Card {
	constructor(profile) {
		this.profile = profile;
		this._element = document.createElement('div');
		this._element.classList.add('card');
		this._element.setAttribute('itemscope', '');
		this._element.setAttribute('itemtype', 'https://schema.org/Person');
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
		thumbImg.title = `${this.profile.icaName} - ${this.profile.title}`;
		thumbImg.alt = this.profile.icaName;
		thumbImg.setAttribute('itemprop', 'photo');

		const fullnameElem = document.createElement('h2');
		fullnameElem.innerText = this.profile.icaName;
		fullnameElem.setAttribute('itemprop', 'name');

		const jobTitleElem = document.createElement('h3');
		jobTitleElem.innerText = this.profile.title;
		jobTitleElem.setAttribute('itemprop', 'title');

		const bioElem = document.createElement('p');
		bioElem.classList.add('bio');
		bioElem.innerText = this.profile.bioShort;


		const contactBtn = document.createElement('a');
		contactBtn.classList.add('contact', 'btn');
		contactBtn.innerText = "Contact";
		contactBtn.href = `mailto:${this.profile.email}`;
		contactBtn.setAttribute('alt', this.profile.email);

		const skillCont = document.createElement('div');
		const skillInfo = document.createElement('span');
		const skillLabel = document.createElement('label');
		skillCont.classList.add('info');
		skillInfo.innerText = `${this.profile.linkedInSkill},`;
		skillLabel.innerText = "Skill";
		skillCont.appendChild(skillInfo);
		skillCont.appendChild(skillLabel);

		const teamCont = document.createElement('div');
		const teamInfo = document.createElement('span');
		const teamLabel = document.createElement('label');
		teamCont.classList.add('info');
		teamInfo.innerText = `${this.profile.teamName},`;
		teamInfo.setAttribute('itemprop', 'organizational-unit');
		teamLabel.innerText = "Team";
		teamCont.appendChild(teamInfo);
		teamCont.appendChild(teamLabel);

		thumbCont.appendChild(thumbImg);
		cardInner.appendChild(thumbCont);
		cardInner.appendChild(fullnameElem);
		cardInner.appendChild(jobTitleElem);
		cardInner.appendChild(bioElem);
		cardInner.appendChild(skillCont);
		cardInner.appendChild(teamCont);
		cardInner.appendChild(contactBtn);

		this._element.appendChild(cardInner);
	}
	get element() {
		return this._element;
	}
}
