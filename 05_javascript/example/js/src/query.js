export default class Query {
    constructor(url) {
        this.url = url;
    }

    sendQuery(button) {
        button.addEventListener('click', () => fetch(this.url));
    }
}
