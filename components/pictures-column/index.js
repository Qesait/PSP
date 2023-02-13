import {PictureButton} from "../picture-button/index.js";

export class PicturesColumn {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('pictures-column')
    }
        
    getHTML() {
        return (
            `
                <div id="pictures-column" class="btn-group-vertical" role="group" style="max-width: 600px;"></div>
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