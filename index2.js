const express = require("express")
const fetch = require("node-fetch")
const bodyParser = require("body-parser")
const app = new express()
 
app.use(bodyParser.json())

//prima versione accreditamento

const accreditation= {
    nome: "Alessia Lugli"
}

fetch("http://192.168.1.231:8080/accreditamento", {
  method: "POST", 
  headers: {"Content-Type2" : "application/json"},
  body: JSON.stringify(accreditation),
})

//seconda versione accreditamento
fetch("http://192.168.1.231:8080/accreditamento", {
  method: "POST", 
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
      nome: "Alessia Lugli"
  })
})

fetch("http://192.168.1.231:8080/1", {
    method: "get",
    headers: {"x-data":"true"},
})
.then(res => res.json())
.then(resBody => {
    const reqData = resBody.reqData
    console.log(reqData)
    let risultato = []
    reqData.forEach(e => {
        if (e % 3 === 0){
            risultato.push(e)
        }
    })
    console.log(risultato)
    fetch("http://192.168.1.231:8080/1", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({data: risultato})
    })
})

app.listen(8080, () => console.log("server listening on port 8080"))