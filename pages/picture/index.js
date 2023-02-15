import {PictureButton} from "../../components/picture-button/index.js";
import {MainPage} from "../main/index.js";

export class PicturePage {
    constructor (parent, source) {
        this.parent = parent;
        this.source = source;
    }

    clickBack() {
        if (confirm("Вы точно хотите закрыть картинку?")) {
            const mainPage = new MainPage(this.parent)
            mainPage.render()
        }
    }

    render() {
        this.parent.innerHTML = ''
        const backButton = new PictureButton(this.parent)
        backButton.render({id: 1, source: this.source}, this.clickBack.bind(this))
    }
}