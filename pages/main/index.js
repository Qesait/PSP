import {PictureButton} from "../../components/picture-button/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    getData() {
        return [
            "../../pictures/1.jpg",
            "../../pictures/2.jpg",
            "../../pictures/3.jpg",
            "../../pictures/4.jpg",
        ]
    }
        
    render() {       
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData();
        const pictureButton = new PictureButton(this.pageRoot);
        pictureButton.render(data);
    }
}
