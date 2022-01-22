// حتما پسوند فایل های جاوا اسکریپت را بگذارید و گرنه ماژول لود نمیشود
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        // این قسمت با استفاده از ارث بری از کلاس 
        // والد میتوان عنوان مورد نظر صفحه را
        // تنظیم کرد
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        // اینجا 
        // html
        // مورد نظر را نوشته و طبق تنظیمات به صفحه
        // پاس میدهیم
        return `
        <h1>Dashboard</h1>
        <p>this is my Dashboard</p>
        <p>
            <a href="/posts" data-link>click</a>
        </p>
        `;
    }
}