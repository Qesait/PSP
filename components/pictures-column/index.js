import {PictureButton} from "../picture-button/index.js";

export class PicturesColumn {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById(`pictures-column-${this.id}`)
    }
        
    getHTML() {
        const columns = document.getElementsByClassName('btn-group-vertical')
        this.id = (columns.length) ? +columns.item(columns.length - 1).dataset.id + 1 : 1
        return (
            `
                <div id="pictures-column-${this.id}" data-id="${this.id}" class="btn-group-vertical" role="group"></div>
            `
        )
    }

    render(data, listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        data.forEach((item) => {
            const pictureButton = new PictureButton(this.pageRoot)
            pictureButton.render(item, listener)
        })
    }
}