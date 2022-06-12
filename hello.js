function findMeaning(){
    return 73
}
console.log(findMeaning())
const mission=process.argv[2]
if(mission==='Learn'){
    console.log('Time to write some code')
}else{
    console.log(`Is ${mission}ing really more fun?`)
}
const EvenEmitter=require('events')
class MyEmitter extends EvenEmitter {

}
//Subscribe to celebrity for Observer one
const celebrity=new MyEmitter()
celebrity.on('race win',()=>{
    console.log('Congrats, you are the best')
})
//Subscribe to celebrity for Observer one
celebrity.on('race win',()=>{
    console.log('Boo I could have better than that')
})
//using the even on our process function
process.on('exit',(code)=>{
 console.log(`Process exit with code : ${code}`)
})
celebrity.emit('race win')


//MAKING HTTP REQUESTS
const http=require('http')
const req=http.request('http://ww.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data chunk: ${chunk}`)
    })
    res.on('end',()=>{
        console.log('No more data')
    })
})
req.end()
