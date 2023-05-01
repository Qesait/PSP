import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {urls} from "../../modules/urls.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    async renderUser() {
        try {
            const users = await fetch(urls.getUserInfo(this.id))
                                .then(response => response.json())
                                .then(data => data.response);
            const product = new ProductComponent(this.pageRoot)
            product.render(users[0])
        } catch (e) {
            console.log(e);
        }
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        console.log(item[0])
        product.render(item[0])
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        this.renderUser();
        
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    }
}