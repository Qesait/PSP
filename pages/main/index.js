import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    get pageSelect() {
        return document.getElementById('chat-select')
    }
        
    getHTML() {
        return (
            `
                <select id=chat-select class="form-select" aria-label="Default select example"></select>
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    getData() {
        ajax.post(urls.getChats(), (data) => {
            this.rederSelect(data.response.items)
        })
    }
    
    rederSelect(items) {
        const chats = items.filter(el => el.conversation.peer.type=="chat")
                            .map(el => ({id: el.conversation.peer.id, name: el.conversation.chat_settings.title}));
        let select = this.pageSelect;
        chats.forEach((item) => {
            select.insertAdjacentHTML('beforeend', `<option value="${item.id}">${item.name}</option >`)
        })
        const child = select.querySelector("option:last-child")
        if (child !== undefined) {
            select.value = child.value;
            select.dispatchEvent(new Event("change"));
        }
    }

    getMembers(item) {
        ajax.post(urls.getChatMembers(item), (data) => {
            this.renderMembers(data.response.profiles)
        })
    }

    renderMembers(items) {
        this.pageRoot.innerHTML = ''
        if (items === undefined) {
            return
        }
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.pageSelect.addEventListener("change", (event) => {
            this.getMembers(event.target.value)
        })
        
        this.getData()
    }
}
