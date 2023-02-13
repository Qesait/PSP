export class PicturePage {
    constructor (parent, source) {
        this.parent = parent;
        this.source = source;
    }

    getHTML() {
        return(
            `
                <img src="${this.source}" class="img-fluid" alt="картинка">
            `
        )
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}