import BasicComponent from '../lib/BasicComponent';
import cardHtml from './card.tmpl.html';

export default class Card extends BasicComponent {
	constructor(profile) {
		super(cardHtml);
		this.state = {
			profile
		}
		this.render();
	}
}
