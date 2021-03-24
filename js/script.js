'use strict';
window.onload= function () {
    let btn = document.querySelector('button');
    let ccc_area= document.querySelector(".page_ccc");
    let brBar = document.querySelector(".browser_bar");
    let btn1act = document.querySelector('.active');
    let btn1 = document.querySelector('.btn1');
    let btn3 = document.querySelector('.ul_btn');
    let ul = document.querySelector('ul');
    btn.addEventListener('click', OpenFN);
    ccc_area.addEventListener('click', closeFN);
    btn1.addEventListener('click', firstFN);
    btn3.addEventListener('click', liFN);

    function OpenFN() {
        ccc_area.style.display='block';
        brBar.style.display='block';
    }
    function closeFN() {
        ccc_area.style.display='none';
        brBar.style.display='none'
    }
    function firstFN() {
        if(btn1act.className=="active") {
            btn1act.className="disable";
            btn1act.innerText="Clicked"
        }else {
            btn1act.className="active";
            btn1act.innerText="Click (with JS)"
        }
    }
    function liFN() {
        if(btn3.classList.contains("active")) {
            btn3.classList.remove("active");
            ul.style.display='none'
        }else {
            btn3.classList.add("active");

            ul.style.display='flex'
        }
    }
}
