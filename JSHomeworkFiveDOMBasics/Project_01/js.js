function fiscalFieldSet(id){
    if(document.getElementById(id).checked){
        var construction =
            '<label for="firmName">Фирма/Организация:<span class="redAster">*</span></label>'+
            '<input class="fullInp" id="firmName" name="firmName" type="text""/>'+

            '<label for="mol">МОЛ:<span class="redAster">*</span></label>'+
            '<input class="fullInp" id="mol" name="mol" type="text""/>'+

            '<label for="eik">ЕИК:<span class="redAster">*</span></label>'+
            '<input class="fullInp" id="eik" name="eik" type="text""/>'+

            '<label for="dds">ИН по ДДС:<span class="redAster">*</span></label>'+
            '<input class="fullInp" id="dds" name="dds" type="text""/>'+

            '<label for="fAddress">Адрес:<span class="redAster">*</span></label>'+
            '<input class="fullInp" id="fAddress" name="fAddress" type="text""/>'
            ;

        document.getElementById('fiscalField').innerHTML = construction;
    }else{
        document.getElementById('fiscalField').innerHTML = '';
    }
}