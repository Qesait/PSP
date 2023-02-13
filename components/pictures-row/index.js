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

    // getHTML(data) {
    //     let html = '<div class="btn-group" role="group"></div>';
    //     data.forEach((item) => {
    //         const button = new PictureButton(html);
    //         html.insertAdjacentHTML('beforeend', button) 
    //         html += `<button type="button"><img style="height: 300px;" src="${item}" alt="картинка"></button>`;
    //     });
    //     return html;
    // }

    render(data) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        data.forEach((item) => {
            const pictureButton = new PictureButton(this.pageRoot)
            pictureButton.render(item)
        })
    }
}