try{
    hello();
}catch(e){
    console.log(e);
}
try{
    anotherFn();
}catch(e){
    console.log('Error' + e.message);
}