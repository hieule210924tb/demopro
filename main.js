function writeLog(){
    var myString ='';
    for(var param of arguments){
          myString += `${param} - `
    }
    console.log( myString)
}
writeLog('log1' ,'log2','log3')