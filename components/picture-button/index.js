export class PictureButton {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        let html = '<div class="btn-group" role="group">';
        data.forEach((item) => {
            html += `<button type="button"><img style="height: 300px;" src="${item}" alt="картинка"></button>`;
        });
        // data.forEach((item) => {
        //     html += `<button type="button">Левая</button>`;
        // });
        html += '</div>';
        return html;
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}