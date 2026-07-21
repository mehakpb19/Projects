let totalproductes = [];
let rendedproductes =[];
    let finalarray = [];
let totalprice = 0;
class newproduct {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
}

let addproductbtn = document.querySelector('#add-product-btn');
let modaloverlay = document.querySelector('#add-product-modal');
let cancelbtn = document.querySelector('#cancel-product-btn')
let submitbtn = document.querySelector('#submit-product-btn')

let newproductname = document.querySelector('#new-product-name');
let newproductprice = document.querySelector('#new-product-price');
let productlist = document.querySelector('#products-list');
let chart = document.querySelector('.chart-list');

submitbtn.addEventListener('click', function() {
    if(!totalproductes.find(e=>e.name==newproductname.value))
    {
    totalproductes.push(new newproduct(newproductname.value,newproductprice.value));
    formoffon();
    }else{
        alert('its already exist');
    }
})


function formoffon() {
    modaloverlay.classList.toggle('hiden');
    renderproduct();
}
function renderproduct() {
    productlist.innerHTML = ''; 
    totalproductes.forEach(element => {        
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // 2. Create the heading
        const heading = document.createElement('h4');
        heading.textContent = element.name;

        const price = document.createElement('div');
        price.textContent = element.price;

        // 3. Create the button
        const button = document.createElement('button');
        button.id = 'add-btn';
        button.type = 'button';
        button.textContent = 'Add me!';

    button.addEventListener('click', function() {
    
    // 1. ALWAYS push a brand new object to avoid linking data
    rendedproductes.push({ name: element.name, price: element.price, count: 1 });
    totalprice+=parseInt(element.price);
    console.log(totalprice);
    
    finalarray = [];
    rendedproductes.forEach(item => {
      const existingItem = finalarray.find(el => el.name === item.name);

      if (existingItem) {
        // FIXED: Increase the count of the item found in finalArray
        existingItem.count += 1;
      } else {
        // FIXED: Push a NEW copy of the object to protect the original array
        finalarray.push({ name: item.name, price: item.price, count: 1 });
      }
    });

    renderchartedproduct(finalarray);
});


        // 4. Assemble the pieces
        productDiv.appendChild(heading);
        productDiv.appendChild(price);
        productDiv.appendChild(button);

        // 5. Add it to your webpage (e.g., inside the body or a specific container)
        productlist.appendChild(productDiv);
    })
}
function renderchartedproduct(finalarray) {
    
    chart.innerHTML='';
    finalarray.forEach(element => {
 
        
    // 2. Create the product container
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // 3. Create the heading
    const heading = document.createElement('h4');
    heading.textContent = `${element.name}x(${element.count})`;

    // 4. Create the price div
    const priceDiv = document.createElement('div');
    priceDiv.className = 'price';
    priceDiv.textContent = (element.price*element.count);

    // 5. Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.id = 'remove-btn'; // Note: IDs should be unique. If generating multiple products, consider generating unique IDs!
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove me!';

    // (Optional) Attach the remove functionality right away
    removeBtn.addEventListener('click', () => {
        let remove =finalarray.find(item => item.name === element.name);
        finalarray.splice(finalarray.indexOf(remove),1);
        rendedproductes=rendedproductes.filter(item => item.name != element.name)
        productDiv.remove(); // This will instantly remove the product from the screen
    });

    // 6. Assemble everything
    productDiv.appendChild(heading);
    productDiv.appendChild(priceDiv);
    productDiv.appendChild(removeBtn);

    chart.appendChild(productDiv);
    })
   
    document.querySelector('#total').textContent = totalprice;
}