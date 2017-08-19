
// push/pop
// xxx.push("xx")
// -- add to the end of an array
// xxx.pop()
// -- remove the last item of an array

//forEach + push()
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach(function(image){
areas.push(image.height*image.width)    
})
console.log(areas)
