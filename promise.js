console.log('person 1:shows ticket')

console.log('person 2:shows ticket')



const promiseWifeBringingTicks=new Promise((resolve,reject) =>{

setTimeout(()=>{

resolve('tickets');

},3000)

});



const getPopcorn=promiseWifeBringingTicks.then((t) =>{

console.log('wife: I have the ticks');

console.log('husband: we should go in');

console.log('wife: no i am hungry');

return new Promise((resolve,reject)=> resolve(`${t} popcorn`) );

});



const getButter= getPopcorn.then((t) =>{

console.log('husband: i got some popcorn');

console.log('husband: we should go in');

console.log('wife: i need butter on my popcorn');

return new Promise((resolve,reject)=> resolve(`${t} butter`) );

});



const getColdDrinks= getButter.then((t) =>{

console.log('husband: we have got butter');

console.log('wife: i need colddrinks too ');

console.log('husband: okay i will get it');

return new Promise((resolve,reject)=> resolve(`${t} colddrinks`) );

});

getColdDrinks.then((t)=>console.log(t));



console.log('person 4:shows ticket')

console.log('person 5:shows ticket')
