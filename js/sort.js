$('button.comp').on('click', SortUp);
$('button.comp1').on('click', SortDown);

function SortUp(){
    let nav = document.querySelector('.cartSmarphon');
    console.log(nav.children);
    for (let i = 0; i < nav.children.length; i++) {
        console.log(i)
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data_price') < +nav.children[j].getAttribute('data_price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }

}

function SortDown(){
    let nav = document.querySelector('.cartSmarphon');
    console.log(nav.children);
    for (let i = 0; i < nav.children.length; i++) {
        console.log(i)
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data_price') > +nav.children[j].getAttribute('data_price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }

}

function  insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextElementSibling);
}