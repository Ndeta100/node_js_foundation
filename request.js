//Creating a request module
function encrpty(data){
    return ' data'
}
function send(url,data){
 const encryptedData=encrpty(data)
 console.log('Sending '  + encryptedData + ' to ' + url )
}
module.exports={send}