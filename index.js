class Account{
    constructor(accountname,Balance){
        this.accountname = accountname;
        this.Balance = Balance;
        this.history = [];
         
        this.displaybalance = document.querySelector('#displaybalance');
        this.input = document.querySelector('#input');
        this.logs = document.querySelector(`.logs`);
document.getElementById('deposit').addEventListener('click',()=>this.deposit());
document.getElementById('withdrow').addEventListener('click',()=>this.withdrow());

        
    }
    deposit(){
        this.Balance+=parseInt(this.input.value);
        this.history.unshift({
            type:'deposit',
            amount:parseInt(this.input.value),
            date:new Date().toLocaleTimeString()
        })
        this.updateui();
    }
    withdrow(){
        this.Balance-=parseInt(this.input.value);
        this.history.unshift({
            type:'withdrow',
            amount:parseInt(this.input.value),
            date:new Date().toLocaleTimeString()
        })
        this.updateui();
    }
    updateui(){
        this.displaybalance.textContent = this.Balance;
        this.logs.innerHTML='';
        this.history.forEach((log)=>{
            const li = document.createElement('li');
            li.textContent = `${log.type} : ${log.amount} at ${log.date}`;
            this.logs.appendChild(li);})
    }
}
let user = new Account('mehak','1000');