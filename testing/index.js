let rvalue =0;
while (rvalue !== 7) {
    rvalue = Math.floor(Math.random()*10);
    let div = document.createElement('div');
    div.textContent = rvalue;
    document.body.append(div)
}