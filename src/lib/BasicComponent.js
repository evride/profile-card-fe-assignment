export default class BasicComponent {
	constructor(template) {
		this.template = template;
	}

	render() {
		const elem = document.createElement('div');
		elem.innerHTML = this.convertTemplate();
		this._element = elem.firstChild;
	}

	convertTemplate() {
		const { state } = this;
		return new Function('state', 'return `' + this.template + '`;')(state);
	}

	get element() {
		return this._element;
	}
}