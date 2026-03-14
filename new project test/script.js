let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let counter = document.getElementById('counter');
let change = document.getElementById('change');
let create = document.getElementById('create');
let search = document.getElementById('search');
let searchbytitle = document.getElementById('search-by-title');
let searchbycategory = document.getElementById('search-by-category');
let Delete = document.getElementById('Delete');
let tbody = document.getElementById('tbody');
let mod = 'create';
let temp;
//get total
function gettotal(){
    
    if(price.value!=''){
        let result = (+price.value + +taxes.value + +ads.value) - discount.value; 
        total.style.backgroundColor = 'green';
        total.innerHTML = result+' Total'
    }
    else{
        total.style.backgroundColor = 'red';
    }
}
//craet product
 pro = [];
    if(localStorage.getItem('data')!=null){
    pro = JSON.parse(localStorage.getItem('data'));
}
create.addEventListener('click',()=>{
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        counter:counter.value,
        change:change.value,
    }
    cleandata();
        if (mod === 'create') {
            if (newpro.counter > 1) {
                for (let i = 0; i < newpro.counter; i++) {
                    pro.push(newpro);
                }
            }
            else {
                pro.push(newpro);
            }
        }
        else {
            pro[temp] = newpro;
            counter.style.display = 'block';
            create.innerHTML = 'create';
            mod = 'create';
        }
        create.innerHTML = 'create';
        localStorage.setItem('data', JSON.stringify(pro));
        getread();
    
    //uppdate();
});
//clean data
function cleandata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    counter.value = '';
    change.value = '';
    total.innerHTML = ' Total';
}
 
 //read data
function getread(){
        let result = '';
        for (let i = 0; i < pro.length; i++) {
            result +=
                `
            <tr>
                    <td>${i}</td>
                    <td>${pro[i].title}</td>
                    <td>${pro[i].price}</td>
                    <td>${pro[i].taxes}</td>
                    <td>${pro[i].ads}</td>
                    <td>${pro[i].discount}</td>
                    <td>${pro[i].total}</td>
                    <td>${pro[i].change}</td>
                    <td><button onclick="uppdate(${i})" class="button-show">uppdate</button></td>
                    <td><button onclick="Deletedata(${i});" class="button-show">Delete</button></td>
            </tr>
        `;
        }
        let tbody = document.getElementById('tbody').innerHTML = result;
}
//delete data
getread();
function Deletedata(i){
    localStorage.clear();
    pro.splice(i,1);
    getread();
}
//deletall
function deleteall(){
    localStorage.clear();
    pro.splice(0);
    getread();
}

//uppdate
function uppdate(i){
    title.value = pro[i].title;
    price.value = pro[i].price;
    taxes.value = pro[i].taxes;
    ads.value = pro[i].ads;
    discount.value = pro[i].discount;
    total.innerHTML = pro[i].total;
    change.value = pro[i].change;
    counter.style.display = 'none';
    create.innerHTML = 'uppdate';
    mod = 'uppdate';
    temp = i;
    scroll({
        top:0,
        behavior:"smooth",
    });
}

//search

let test = 'title';
function searchdata(id) {
    let search = document.getElementById('search');
    if (id === 'search-by-title') {
        test = 'title';
        search.placeholder = 'search by title';
    }
    else {
        test = 'category';
        search.placeholder = 'search by catgory';
    }
    search.focus();
}

function searching(value){
    if (test === 'title') {
        let result = '';
        for (let i = 0; i < pro.length; i++) {
            if (pro[i].title.includes(value)){
                result +=
                    `
            <tr>
                    <td>${i}</td>
                    <td>${pro[i].title}</td>
                    <td>${pro[i].price}</td>
                    <td>${pro[i].taxes}</td>
                    <td>${pro[i].ads}</td>
                    <td>${pro[i].discount}</td>
                    <td>${pro[i].total}</td>
                    <td>${pro[i].change}</td>
                    <td><button onclick="uppdate(${i})" class="button-show">uppdate</button></td>
                    <td><button onclick="Deletedata(${i});" class="button-show">Delete</button></td>
            </tr>
        `;
            }
        }
         let tbody = document.getElementById('tbody').innerHTML = result;
    }

    else{
        let result = '';
        for (let i = 0; i < pro.length; i++) {
            if (pro[i].change.includes(value)){
                result +=
                    `
            <tr>
                    <td>${i}</td>
                    <td>${pro[i].title}</td>
                    <td>${pro[i].price}</td>
                    <td>${pro[i].taxes}</td>
                    <td>${pro[i].ads}</td>
                    <td>${pro[i].discount}</td>
                    <td>${pro[i].total}</td>
                    <td>${pro[i].change}</td>
                    <td><button onclick="uppdate(${i})" class="button-show">uppdate</button></td>
                    <td><button onclick="Deletedata(${i});" class="button-show">Delete</button></td>
            </tr>
        `;
            }
        }
         let tbody = document.getElementById('tbody').innerHTML = result;
    }
}