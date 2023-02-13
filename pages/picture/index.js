export class PicturePage {
    constructor (parent, source) {
        this.parent = parent;
        this.source = source;
    }

    getHTML() {
        // <img src="${this.source}" alt="картинка"></img>
        return(
            `
                
                <img src="../../pictures/4.jpg" alt="картинка">
            `
        )
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}