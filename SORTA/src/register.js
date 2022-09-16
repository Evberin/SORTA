if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(reg =>{

    }).catch(err =>{
        console.error(err.message)
    })
}