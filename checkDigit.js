var checkDigit =(num)=>{
    var tot = 0;
    var splity = num.split('');
    var len = splity.length;


for(var i=0;i<len;i++){
    tot = tot + parseInt(splity[i]);

}

    console.log(tot);
    if(tot>9){
        num = tot;

        checkDigit(num.toString());
    }
    else{
        return num;
    }

}

console.log(checkDigit("786543"));