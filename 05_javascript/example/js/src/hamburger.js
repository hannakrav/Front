export default class Hamgurger {
    constructor(hamburger) {
        this.hamburger = hamburger;

        this.hamburger.addEventListener('click', e => this.click(e.currentTarget));
    }

    click(item) {
        item.classList.toggle('active');
    }
}
