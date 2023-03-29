import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";

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

    getMembers(data) {
        let chats = data.filter(el => el.conversation.peer.type=="chat").map(el => el.conversation.peer.id);
        console.log(chats)
        ajax.post(urls.getChatMembers(chats[0]), (data) => {
            console.log(data.response.profiles)
            this.renderData(data.response.profiles)
        })
    }
        
    getData() {
        ajax.post(urls.getChats(), (data) => {
            this.getMembers(data.response.items)
        })
    }

    renderData(items) {
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