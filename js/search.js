var lastResFind="";
var copy_page="";
function TrimStr(s) {
    s = s.replace( /^\s+/g, '');
    return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;

    if (obj) {
        textToFind = TrimStr(obj.value);
    }
    if(copy_page.length>0)
        document.body.innerHTML=copy_page;
    else copy_page=document.body.innerHTML;


    document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>");
    lastResFind=textToFind;
    window.location = '#'+textToFind;
}