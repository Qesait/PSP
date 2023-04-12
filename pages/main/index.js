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
        let chats = items.filter(el => el.conversation.peer.type=="chat").map(el => el.conversation.peer.id);
        let select = this.pageSelect;
        chats.forEach((item) => {
            select.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option >`)
        })
        this.pageSelect.value = this.pageSelect.querySelector("option:first-child").value;
        this.pageSelect.dispatchEvent(new Event("change"));
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

// [
//     {
//         "id": 263432142,
//         "photo_400_orig": "https://sun1-89.userapi.com/s/v1/ig2/OGv9_6c--VElzLiXxvFNrMMaY_0ZXetIIP1_lmFGBz_II427PrbOfFv0HOupz6d4wIvwT1UdoyRfPlRwImOmaP79.jpg?size=400x400&quality=96&crop=168,0,1505,1505&ava=1",
//         "first_name": "Влад",
//         "last_name": "Кузнецов",
//         "can_access_closed": true,
//         "is_closed": false
//     },
//     {
//         "id": 664711983,
//         "photo_400_orig": "https://sun1-88.userapi.com/s/v1/ig2/LKtfmMKDKC88WkipUGsDkfsQQTJiUtl36IAD5nquex7lq3vbY2aPIrptMJ0fO1Go3wuC0F21CmPnKLv9S5p7-aOg.jpg?size=225x225&quality=96&crop=0,0,225,225&ava=1",
//         "first_name": "Manga",
//         "last_name": "Fan",
//         "can_access_closed": true,
//         "is_closed": false
//     }
// ]


// [
//     {
//         "conversation": {
//             "peer": {
//                 "id": 664711983,
//                 "type": "user",
//                 "local_id": 664711983
//             },
//             "last_message_id": 3,
//         },
//         "last_message": {
//             "date": 1680095130,
//         }
//     },
//     {
//         "conversation": {
//             "peer": {
//                 "id": 2000000001,
//                 "type": "chat",
//                 "local_id": 1
//             },
//             "last_message_id": 2
//         },
//         "last_message": {
//             "date": 1680093864,
//         }
//     }
// ]