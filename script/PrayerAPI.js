
select.addEventListener("change",function(){
    
   let selectedCity = select.value;
     for(var i=0 ; i<wilayasenfrancais.length;i++){
    if (selectedCity==wilayasenfrancais[i].code ) {
        let selectnamecity= wilayasenfrancais[i].name
        fetchAPI(selectnamecity)
        break;
    }
}
})


