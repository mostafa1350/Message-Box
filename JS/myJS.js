window.alert = (msg,timeout=null)=>{
    const alert  = document.createElement('div');
    const btnAlert =  document.createElement('button');
    const Okey = "Ok";
    btnAlert.innerHTML=`<span style ="display:flex;
                                      justify-content:center;
                                      align-items:center;
                                      padding:10px;
                                      width:10px;
                                      color:red;
                                      font-size:15px;">${Okey}</span>`;
    btnAlert.setAttribute('style',`
        background :rgb(226, 224, 224);
        width:45px;
        border-radius:5px;
        `
        );
    
    alert.classList.add('alert');
    alert.setAttribute('style',`
        background :rgb(212, 208, 208);
        position:fixed;
        top:50%;
        left:50%;
        padding:15px;
        border: 1px solid #345642;
        border-radius:8px;
        box-shadow: 6px 6px 12px #223322;
        display:flex;
        justify-content:center;
        align-items:center;
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