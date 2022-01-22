// حتما پسوند فایل های جاوا اسکریپت را بگذارید و گرنه ماژول لود نمیشود
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>posts</h1>
        <p>this is my posts</p>
        <p>
            <a href="/posts/2" data-link>click</a>
        </p>
        `;
    }
}