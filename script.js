function gerar(){    
    let txtnum = document.querySelector('input#txtnum')
    let txtsel = document.querySelector('select#res')

    let numero = Number(txtnum.value)
    let select = Number(txtsel.value)

    txtsel.innerHTML = ''

    if(txtnum.value.length == 0){
        alert('Por favor digite um número')
    }else{
        for (let c = 1; c <= 10; c++) {
        let option1 = document.createElement('option')
        option1.text = `${numero} x ${c} = ${numero * c}`
        option1.value = `tab${c}`
        txtsel.appendChild(option1)
        
    } 
    }
      
}