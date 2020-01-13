const home = document.querySelector('#home');
const mobile = document.querySelector('#mobile');
const business = document.querySelector('#business');
const about = document.querySelector('#about');
const connect = document.querySelector('#connect');
const home_comp = document.querySelector('.home_comp');
const mobile_comp = document.querySelector('.mobile_comp');
const business_comp = document.querySelector('.business_comp');
const about_comp = document.querySelector('.about_comp');
const connect_comp = document.querySelector('.connect_comp');
let footer = document.querySelector('.footer');
let mini = `<i style=" font-weight: lighter;
font-size: 20px;
margin-top: 0 ;
color: #cacaca;
margin-bottom: auto ;" class="icon-arrow-up"></i>`;
let plus = `+`;
let minimize = home_comp.previousElementSibling;

let options = document.querySelector('.options');
// functions



window.addEventListener('resize', size);

function size() {


  
    let sz = window.innerWidth;


};

let ww = this.window.innerWidth;



home.addEventListener('click', pop_comp);

function pop_comp() {
    if (home.className != 'open') {
        let child = home.children[0].children[1];
        child.innerHTML = mini;
        home_comp.style.position = 'unset';
        home_comp.style.visibility = 'visible';
        setTimeout(function() {
            home.className = 'open';
        }, 100)
    }
};
minimize.addEventListener('click', close);

function close() {
    if (home.className == 'open') {
        home_comp.style.position = 'absolute';
        home_comp.style.visibility = 'hidden'
        let child = home.children[0].children[1];
        child.innerHTML = plus;


    }
    let ww_home = window.innerWidth;
    if (ww_home > 740) {
        home_comp.style.position = 'unset';
        home_comp.style.visibility = 'visible';



    }
    setTimeout(function() {
        home.className = '';
    }, 100)
};

business.addEventListener('click', pop_comp3);
let minimize3 = business_comp.previousElementSibling;

function pop_comp3() {
    if (business.className != 'open') {
        let child = business.children[0].children[1];
        child.innerHTML = mini;
        business_comp.style.position = 'unset';
        business_comp.style.visibility = 'visible';
        setTimeout(function() {
            business.className = 'open';
        }, 100)
    }
};
minimize3.addEventListener('click', close3);

function close3() {
    if (business.className == 'open') {
        business_comp.style.position = 'absolute';
        business_comp.style.visibility = 'hidden'
        let child = business.children[0].children[1];
        child.innerHTML = plus;
    }
    let ww1 = window.innerWidth;
    if (ww1 > 740) {
        business_comp.style.position = 'unset';
        business_comp.style.visibility = 'visible';

    }
    setTimeout(function() {
        business.className = '';
    }, 100)
};
about.addEventListener('click', pop_comp4);
let minimize4 = about_comp.previousElementSibling;

function pop_comp4() {
    if (about.className != 'open') {
        let child = about.children[0].children[1];
        child.innerHTML = mini;
        about_comp.style.position = 'unset';
        about_comp.style.visibility = 'visible';
        setTimeout(function() {
            about.className = 'open';
        }, 100)
    }
};
minimize4.addEventListener('click', close4);

function close4() {
    if (about.className == 'open') {
        about_comp.style.position = 'absolute';
        about_comp.style.visibility = 'hidden'
        let child = about.children[0].children[1];
        child.innerHTML = plus;
    }
    let ww3 = window.innerWidth;
    if (ww3 > 740) {
        about_comp.style.position = 'unset';
        about_comp.style.visibility = 'visible';

    }
    setTimeout(function() {
        about.className = '';
    }, 100)
};


mobile.addEventListener('click', pop_comp2);
let minimize2 = mobile_comp.previousElementSibling;




function pop_comp2() {
    if (mobile.className != 'open') {
        let child = mobile.children[0].children[1];
        child.innerHTML = mini;
        mobile_comp.style.position = 'unset';
        mobile_comp.style.visibility = 'visible';
        setTimeout(function() {
            mobile.className = 'open';
        }, 100)
    }
};
minimize2.addEventListener('click', close2);

function close2() {
    if (mobile.className == 'open') {
        mobile_comp.style.position = 'absolute';
        mobile_comp.style.visibility = 'hidden';
        let child = mobile.children[0].children[1];
        child.innerHTML = plus;

    }
    if (ww > 740) {
        mobile_comp.style.position = 'unset';
        mobile_comp.style.visibility = 'visible';

    }
    setTimeout(function() {
        mobile.className = '';
    }, 100)
};
////search bar

let search_bar = document.querySelector('.search');
let search_icon = document.querySelector('.fa-search');
let cancel = document.querySelector('.fa-times');
let inputt = document.querySelector('.search-txt');

search_icon.addEventListener('click', pop_bar);

function pop_bar() {
    if (search_icon.id != 'load') {
        search_bar.style.visibility = 'visible';
        search_bar.style.position = 'none';
        setTimeout(function() {
            search_icon.id = 'load';
        }, 100)
    }
    toggleUp();
    toggleUp_help();
    toggleUp_shop();
    menu_close();



};

cancel.addEventListener('click', shut);

function shut() {

    search_bar.style.visibility = 'hidden';
    search_bar.style.position = 'absolute';


};
let s_icon = document.querySelector(".s_icon");
let no_results = document.querySelector(".no_results");

window.addEventListener('keypress', key)

function key(e) {
    if (e.charCode === 13) {
        if (search_icon.id == 'load') {
            search_bar.style.visibility = 'hidden';
            search_bar.style.position = 'absolute';
            no_results.style.visibility = 'visible';

            setTimeout(function() {
                search_icon.id = '';

            }, 10)
            setTimeout(function() {

                no_results.style.visibility = 'hidden';
            }, 6000)
            if (inputt.value == '') {
                no_results.style.visibility = 'hidden';
                inputt.setAttribute("placeHolder", "Please fill out");
                search_bar.style.visibility = 'visible';
                search_bar.style.position = 'none';

            }
        };
        console.log(inputt.value);
        setTimeout(function() {
            inputt.value = '';
        }, 800)




    };

};


search_icon.addEventListener('click', search);

function search() {


    if (search_icon.id == 'load') {
        search_bar.style.visibility = 'hidden';
        search_bar.style.position = 'absolute';


        no_results.style.visibility = 'visible';

        setTimeout(function() {
            search_icon.id = '';

        }, 10)
        setTimeout(function() {

            no_results.style.visibility = 'hidden';
        }, 6000)
        if (inputt.value == '') {
            no_results.style.visibility = 'hidden';
            inputt.setAttribute("placeHolder", "Please fill out");
            search_bar.style.visibility = 'visible';
            search_bar.style.position = 'none';

        }
    };
    console.log(inputt.value);
    setTimeout(function() {
        inputt.value = '';
    }, 800)



};


no_results.addEventListener('mousemove', hidden);


function hidden() {

    setTimeout(function() {

        no_results.style.visibility = 'hidden';
    }, 500)
};
no_results.addEventListener('wheel', hiddden);

function hiddden() {
    setTimeout(function() {
        no_results.style.visibility = 'hidden';
    }, 800)
};

function trim() {

    if (ww < 740) {
        footer.style.position = 'absolute';
        footer.style.overflow = 'hidden';
    }
};

trim();



let loginn = document.querySelector(".login_comp");
let login = document.querySelector(".login");


login.addEventListener('click', togglee);

function togglee() {
    shut();
    toggleUp_help();
    menu_close();
    toggleUp_shop();

    loginn.style.visibility = 'visible';
    login.style.backgroundColor = '#0072a9';
    login.style.color = 'white';
    login.className = '';
    login.innerHTML = `<div style class=" dropup">
    <i style="font-style: normal;" class="  dropdown-toggle ">Log in</i>
</div>`;

    setTimeout(function() {
        login.id = 'open';
    }, 100)

};
login.addEventListener('click', toggleUp);

function toggleUp() {
    if (login.id == 'open') {
        loginn.style.visibility = 'hidden';
        login.style.backgroundColor = 'initial';
        login.className = 'login dropdown-toggle';
        login.innerHTML = 'Log in';

        setTimeout(function() {
            login.id = '';
        }, 100)

    }
};
let help_comp = document.querySelector('.help_comp');
let help = document.querySelector('.help');
help.addEventListener('click', toggle_help);

function toggle_help() {

    toggleUp();
    shut();
    menu_close();
    toggleUp_shop();
    help_comp.style.visibility = 'visible';
    help.style.backgroundColor = '#0072a9';
    help.style.color = 'white';
    help.className = '';
    help.innerHTML = `<div style class=" dropup">
    <i style="font-style: normal;" class="  dropdown-toggle ">Help</i>
</div>`;

    setTimeout(function() {
        help.id = 'open';
    }, 100)

};
help.addEventListener('click', toggleUp_help);

function toggleUp_help() {

    if (help.id == 'open') {


        help_comp.style.visibility = 'hidden';
        help.style.backgroundColor = 'initial';
        help.className = 'login dropdown-toggle';
        help.innerHTML = 'Help';

        setTimeout(function() {
            help.id = '';
        }, 100)

    }
};
let shop_comp = document.querySelector('.shop_comp');
let shop = document.querySelector('.shop');
shop.addEventListener('click', toggle_shop);

function toggle_shop() {
    toggleUp();
    shut();
    menu_close();

    toggleUp_help();


    shop_comp.style.visibility = 'visible';
    shop.style.backgroundColor = '#0072a9';
    shop.style.color = 'white';
    shop.className = '';
    shop.innerHTML = `<div style class=" dropup">
    <i style="font-style: normal;" class="  dropdown-toggle ">Shop</i>
</div>`;

    setTimeout(function() {
        shop.id = 'open';
    }, 100)

};
shop.addEventListener('click', toggleUp_shop);

function toggleUp_shop() {

    if (shop.id == 'open') {


        shop_comp.style.visibility = 'hidden';
        shop.style.backgroundColor = 'initial';
        shop.className = 'login dropdown-toggle';
        shop.innerHTML = 'Shop';

        setTimeout(function() {
            shop.id = '';
        }, 100)

    }
};
let min = document.querySelector(".icon-close");
const menu1 = document.querySelector(".menu1");
const burger = document.querySelector(".burger");
const burger_icon = document.querySelector('.pop');


burger_icon.addEventListener('click', menu_pop);


function menu_pop() {
    toggleUp();
    toggleUp_help();
    shut();
    toggleUp_shop();

    menu1.style.visibility = 'visible';

    burger_icon.style.visibility = 'hidden';
    min.style.visibility = 'visible';


};

min.addEventListener('click', menu_close);

function menu_close() {
    menu1.style.visibility = 'hidden';
    burger_icon.style.visibility = 'visible';
    min.style.visibility = 'hidden';


};
