class Car{
    constructor(name,rent,Status,id){
        this.name = name;
        this.rent = rent;
        this.Status = Status;
        this.id = id;
    }
    statustoggle(){       
        if (this.Status === true) {
            this.Status = false;        
        }else{
            this.Status = true;        
        }
    }
}
class Rentagenci{
    constructor(){
        this.car = [];
        this.inc = 0;
    }
    addcar(car){
        this.car.push(car);
    }
    updateui(){
        let carsob = document.getElementById('cars');
        carsob.innerHTML = '';
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
            p.textContent = `ID: ${car.id} | $${car.rent}/day`;

            const statusDiv = document.createElement('div');
            statusDiv.className = 'status';
            statusDiv.textContent = `Status: ${car.Status===true?"Available":'UnAvailable'}`;
            statusDiv.style.color = `${car.Status === true?"var(--green)":"var(--red)"}`;

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
            returnBtn.className = 'return-btn'; // Fixed capitalization
            returnBtn.textContent = 'Return';
            returnBtn.addEventListener('click', ()=> {
                this.returncar(statusDiv,rentBtn,returnBtn,h3);
            })
            car.Status===true?returnBtn.classList.toggle('unclickable-button'):rentBtn.classList.toggle('unclickable-button');
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
        this.inc +=parseInt(pricepaying.value*rent);
        revenue.textContent =`$${this.inc}`;

        pricepaying.value='';
       let ev = this.car.find(car => car.name === nam.innerText)
       ev.statustoggle();    
       this.updateui();
    }

    }
    returncar(st,rb,returnbtn,nam){
        let ev = this.car.find(car => car.name === nam.innerText)
        ev.statustoggle();
        this.updateui();
        
    }

}

let angent = new Rentagenci();
angent.addcar(new Car("BMW",100,true ,"v-01"));
angent.addcar(new Car("AUDI",150,true,"v-02"));
angent.addcar(new Car("FORD",120,true,"v-03"));
angent.addcar(new Car("Honda",50,true,"v-04"));

angent.updateui();
