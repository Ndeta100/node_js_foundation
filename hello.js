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