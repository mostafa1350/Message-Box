window.alert = (msg,timeout=null)=>{
    const alert  = document.createElement('div');
    const btnAlert =  document.createElement('button');
    btnAlert.innerText = 'Ok'    ;
    
    alert.classList.add('alert');
    alert.setAttribute('style',`
        background :rgb(212, 208, 208);
        position:fixed;
        top:50%;
        left:50%;
        padding:15px;
        border: 1px solid #345642;
        border-radius:8px;
        box-shadow: 3px 4px 5px #223322;
        display:flex;
        flex-direction:column;
        
        `);
    alert.innerHTML=`<span style ="padding:10px">${msg}</span>`;
    alert.appendChild(btnAlert);
    btnAlert.addEventListener('click',(e)=>{
        alert.remove();
    });
    if (timeout != null) {
        setTimeout(() => {
            alert.remove();
        }, Number(timeout));
    }

    document.body.appendChild(alert);

}