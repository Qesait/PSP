export class PictureButton {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(item) {
        return (
            `<button type="button" id="picture-button-${item.id}">
                <img src="${item.source}" class="img-fluid" data-source="${item.source}" alt="картинка">
            </button>`
        )
    }

    addListeners(item, listener) {
        document
            .getElementById(`picture-button-${item.id}`)
            .addEventListener("click", listener)
    }

    render(item, listener) {
        const html = this.getHTML(item);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(item, listener)
    }
}