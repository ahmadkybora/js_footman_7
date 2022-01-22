// حتما پسوند فایل های جاوا اسکریپت را بگذارید و گرنه ماژول لود نمیشود
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
// اینجا ما از یک پترن استفاده کردیم بوسیله
// کلاس ریگولار اکسپرشن که بوسیله آن
// میتوان به یوآرال آی دی داد
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    // متد زیر یک جفت کلید مقدار را میگیرد
    // و یک شی جدید را برمیگرداند
    // که طبق کد زیر ما بوسیله ریجکس پارامتر را گرفته
    // و برمیگردانیم
    // طبق ریجکس انجام شده در این
    // قسمت همه ای دی ها و یا هر پارامتر 
    // دیگری که نیاز است را
    // به عن.ان یک پارامتر برمیگرداند
    // و در کلاس ابسترکت ویوها دا متد سازند اعما شده که همه
    // کلاس های فرزند به آن دسترسی
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

// بوسیله متد زیر میتوان به فلان روت رفت
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    // console.log(pathToRegex("/posts/:id"))
    const routes = [
        { path: "/", view: Dashboard }, 
        { path: "/posts", view: Posts },  
        { path: "/posts/:id", view: PostView },
        // { path: "/settings", view: () => console.log("settings") },
    ];

    // همه روت ها را گرفته و مسیر آنها را داخل متد
    // location.path
    // میریزیم
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            // isMatch: location.pathname === route.path
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if(!match) {
        match = {
            route: routes[0],
            result: [local.pathname]
        }
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
    // console.log(match.route.view());

}

window.addEventListener("popstate", router);
// زمانیکه یک رویداد انجام میشود
// در صفحه
// بوسیله دسترسی به یک اتریبیوت مورد نظر
// میتوان بین لینک ها حرکت کرد
// توجه کنید ما به تگ  آ کاری نداریم
// و بوسیله دتسرسی به صفت میتوانیم یک 
// spa
// بسازیم
//بدون ارسال درخواست به سرور و رفرش شدن صفحه بوسیله کدهای زیر   
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})