class Car{
    constructor(name,rent,Status){
        this.name = name;
        this.rent = rent;
        this.Status = Status;
    }
    statustoggle(){       
        if (this.Status === 'Available') {
            this.Status = 'UnAvailable';        
        }else{
            this.Status = 'Available';        
        }
    }
}
class rentagenci{
    constructor(){
        this.car = [];
        this.inc = 0;
    }
    addcar(car){
        this.car.push(car);
    }
    updateui(){
        let carsob = document.getElementById('cars');

        this.car.forEach(car=>{
                // Create the main container
            const carDiv = document.createElement('div');
            carDiv.className = 'car';

            // Create details section
            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'details';

            const h3 = document.createElement('h3');
            h3.textContent = car.name;

            const p = document.createElement('p');
            p.textContent = `ID: V-01 | $${car.rent}/day`;

            const statusDiv = document.createElement('div');
            statusDiv.className = 'status';
            statusDiv.textContent = `Status: ${car.Status}`;
            statusDiv.style.color = `${car.Status === "Available"?"var(--green)":"var(--red)"}`;

            detailsDiv.append(h3, p, statusDiv);

            // Create controls section
            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'controles';

            const input = document.createElement('input');
            input.type = 'number';
            input.name = 'number';
            input.className = 'input-number'; // Changed from ID to class
            input.placeholder = 'Days';

            const rentBtn = document.createElement('button');
            rentBtn.className = 'rent-btn';
            rentBtn.textContent = 'Rent';
            rentBtn.addEventListener('click', ()=> {
                this.rentcar(input,statusDiv , car.rent,rentBtn,returnBtn,h3);
})
            const returnBtn = document.createElement('button');
            returnBtn.className = 'return-btn unclickable-button'; // Fixed capitalization
            returnBtn.textContent = 'Return';
           returnBtn.addEventListener('click', ()=> {
                this.returncar(statusDiv,rentBtn,returnBtn,h3);
})
            controlsDiv.append(input, rentBtn, returnBtn);
            carDiv.append(detailsDiv, controlsDiv);
            carsob.appendChild(carDiv);

        })
    }
    rentcar(pricepaying,status,rent,btn,returnBtn,nam){
        if(pricepaying.value == ''){
            alert('endter the value');
        }else{           
        let revenue = document.getElementById('revenue')      
        this.inc =parseInt(pricepaying.value*rent);
        revenue.textContent =`$${this.inc}`;
        status.textContent = `Status: UnAvailable`;
        status.style.color = 'var(--red)';
        btn.classList.toggle('unclickable-button');
        returnBtn.classList.toggle('unclickable-button');
        pricepaying.value='';

       let ev = this.car.find(car => car.name === nam.innerText)
       ev.statustoggle();    

    }

    }
    returncar(st,rb,returnbtn,nam){
        st.textContent = `Status: Available`;
        st.style.color = 'var(--green)';
        rb.classList.toggle('unclickable-button');
        returnbtn.classList.toggle('unclickable-button');
        let ev = this.car.find(car => car.name === nam.innerText)
       ev.statustoggle();
        console.log(this);
        
    }

}

let angent = new rentagenci();
angent.addcar(new Car("BMW",100,"Available"));
angent.addcar(new Car("AUDI",150,"Available"));
angent.addcar(new Car("FORD",120,"Available"));
angent.addcar(new Car("Honda",50,"Available"));

angent.updateui();
