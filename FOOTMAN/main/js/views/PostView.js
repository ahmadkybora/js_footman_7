// حتما پسوند فایل های جاوا اسکریپت را بگذارید و گرنه ماژول لود نمیشود
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        console.log(this.params);
        return `
        <h1>posts</h1>
        <p>this is my posts</p>
        <p>
            <a href="" data-link>click</a>
        </p>
        `;
    }
}