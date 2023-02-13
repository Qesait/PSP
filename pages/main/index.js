import {PicturesRow} from "../../components/pictures-row/index.js";
import {PicturePage} from "../picture/index.js"

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
            {
                id: 1,
                source: "../../pictures/1.jpg"
            },
            {
                id: 2,
                source: "../../pictures/2.jpg"
            },
            {
                id: 3,
                source: "../../pictures/3.jpg"
            },
            {
                id: 4,
                source: "../../pictures/4.jpg"
            },
        ]
    }

    clickCard(e) {
        const source = e.target.dataset.source
    
        const picturePage = new PicturePage(this.parent, source)
        picturePage.render()
    }
        
    render() {       
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData();
        const picturesRow = new PicturesRow(this.pageRoot);
        picturesRow.render(data, this.clickCard.bind(this));
    }
}
