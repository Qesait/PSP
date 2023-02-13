import {PictureButton} from "../../components/picture-button/index.js";

export class PicturesRow {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('pictures-row')
    }
        
    getHTML() {
        return (
            `
                <div id="pictures-row" class="btn-group" role="group"></div>
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