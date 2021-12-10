$('button.compS').on('click', SortUpS);
$('button.compSd').on('click', SortDownS);
$('button.compP').on('click', SortUpP);
$('button.compPd').on('click', SortDownP);
$('button.compN').on('click', SortUpN);
$('button.compNd').on('click', SortDownN);

function SortUpS(){
    let nav = document.querySelector('.cartSmarphon');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data_price') < +nav.children[j].getAttribute('data_price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }

}

function SortDownS(){
    let nav = document.querySelector('.cartSmarphon');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data_price') > +nav.children[j].getAttribute('data_price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }

}
function SortUpP(){
    let nav = document.querySelector('.cartPK');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data_price') < +nav.children[j].getAttribute('data_price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }

}

function SortDownP(){
    let nav = document.querySelector('.cartPK');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data_price') > +nav.children[j].getAttribute('data_price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }

}
function SortUpN(){
    let nav = document.querySelector('.cartNote');
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

function SortDownN(){
    let nav = document.querySelector('.cartNote');
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