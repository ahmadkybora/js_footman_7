export default class {
    // پارامتر همان پارامتری است که 
    // از یوآرال گرفته میشود
    // 
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        // بوسیله این متد میتوان به عنوان صفحه
        // دسترسی داشت و عنوان هر صفحه را 
        // نسبت به نیاز تغییر داد
        document.title = title;
    }

    async getHtml() {
        return "";
    }
} 