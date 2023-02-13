export class PictureButton {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(source) {
        return (
            `<button type="button">
                <img style="height: 300px;" src="${source}" alt="картинка">
            </button>`
        )
    }

    render(source) {
        const html = this.getHTML(source);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}