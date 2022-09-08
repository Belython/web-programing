let loadTime = (function () {
    let now = new Date().getTime();
    let page_load_time = now - performance.timeOrigin
    let time_load = page_load_time / 1000;
    return time_load.toFixed(4);
})();

let loadTimeServer = (function () {
    let cookie;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"server-loading-time"}=`);
    if (parts.length === 2) {
        cookie = parts.pop().split(';').shift();
        return cookie;
    }
})();
function shineLinks(id){
    try{
        var el=document.getElementById(id).getElementsByTagName('a');
        var url=document.location.href;
        for(var i=0;i<el.length; i++){
            if (url==el[i].href){
                el[i].className += ' active-desktop-link';
            };
        };
    }catch(e){}
};

