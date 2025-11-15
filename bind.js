function myfunction(c,d,e) {
    console.log(this)
    console.log(this.a+this.b)
    console.log(c+d+e*(this.a+this.b))
}

//myfunction(33,66)
// myfunction.call({a:33,b:44},77,34,90)
// myfunction.apply({a:55,b:4},[5,6,3])
//// bind method

//var total=myfunction.bind({a:5,b:7},88,90,5)
//total()
//myfunction.bind({a:5,b:7},88,90,5)
myfunction.call(Object(obj),9,8)
myfunction.call(Object(obj),10,8)

var obj={
    a:5,
    b:6
}