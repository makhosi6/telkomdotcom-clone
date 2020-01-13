const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const f2 = document.querySelector('.f2');
const f1 = document.querySelector('.f1');



page1.addEventListener('click', slide1)

function slide1() {
    f1.style.visibility = 'visible';
    f1.style.position = 'unset';
    f2.style.visibility = 'hidden';
    f2.style.position = 'absolute';
    page1.style.color = '#212529';
    page1.style.cursor = 'default';
    page1.style.fontSize = '11px';
    page2.style.color = 'white';
    page2.style.fontSize = 'initial';



};
page2.addEventListener('click', slide2)

function slide2() {
    f2.style.visibility = 'visible';
    f2.style.position = 'unset';
    f1.style.visibility = 'hidden';
    f1.style.position = 'absolute';
    page2.style.color = '#212529';
    page2.style.fontSize = '11px';
    page2.style.cursor = 'default';
    page1.style.color = 'white';
    page1.style.fontSize = '';
    page1.style.visibility = 'visible';


};



function autoSlide() {


    setInterval(() => {
        if (f2.id == 'open') {
            f1.style.visibility = 'visible';
            f1.style.position = 'unset';
            f2.style.visibility = 'hidden';
            f2.style.position = 'absolute';
            page1.style.color = '#212529';
            page1.style.cursor = 'default';
            page1.style.fontSize = '11px';
            console.log('slide1');
            console.log(Date());
            page2.style.color = 'white';
            page2.style.fontSize = 'initial';
            f1.id = 'open';
            f2.id = '';

        }


    }, 8200);

}
autoSlide();


function autoSlide2() {

    setInterval(() => {

        if (f1.id == 'open') {

            f2.style.visibility = 'visible';
            f2.style.position = 'unset';
            f1.style.visibility = 'hidden';
            console.log('slide3');
            console.log(Date());
            f1.style.position = 'absolute';
            page2.style.color = '#212529';
            page2.style.fontSize = '11px';
            page2.style.cursor = 'default';
            page1.style.color = 'white';
            page1.style.fontSize = 'initial';
            f2.id = 'open';
            f1.id = '';

        }

    }, 11300)


};
autoSlide2();

page2.style.color = '#212529';
page2.style.fontSize = '11px';
page2.style.cursor = 'default';