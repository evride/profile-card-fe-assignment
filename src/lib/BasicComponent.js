export default class BasicComponent {
	constructor(template, state) {
		this.template = template;
		this.state = state;
		this.render();
	}

	render() {
		const elem = document.createElement('div');
		elem.innerHTML = this.convertTemplate();
		this._element = elem.firstChild;
	}

	convertTemplate() {
		return new Function('state', 'return `' + this.template + '`;')(this.state);
	}

	get element() {
		return this._element;
	}
}