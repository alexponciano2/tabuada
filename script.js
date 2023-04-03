function gerar(){    
    let txtnum = document.querySelector('input#txtnum')
    let txtsel = document.querySelector('select#res')

    let numero = Number(txtnum.value)
    let select = Number(txtsel.value)

    txtsel.innerHTML = ''
    for (let c = 1; c <= 10; c++) {        
        let res = numero * c
        let option1 = document.createElement('option')
        option1.text = `${numero} x ${c} = ${res}`
        txtsel.add(option1)
        
    }   
}