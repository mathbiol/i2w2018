console.log('jonas.js loaded')

jonas=function(){}

jonas.date=Date()
jonas.double=(x)=>2*x

jonas.getSparcs=async (yr,q)=>{ // get sparcs data from year,query
    //default values
    yr=yr||2015
    q=q||''
    var yrUrl = {
      2009:{url:"https://health.data.ny.gov/resource/s8d9-z734"},
      2010:{url:"https://health.data.ny.gov/resource/dpew-wqcg"},
      2011:{url:"https://health.data.ny.gov/resource/n5y9-zanf"},
      2012:{url:"https://health.data.ny.gov/resource/rv8x-4fm3"},
      2013:{url:"https://health.data.ny.gov/resource/tdf6-7fpk"},
      2014:{url:"https://health.data.ny.gov/resource/pzzw-8zdv"},
      2015:{url:"https://health.data.ny.gov/resource/82xm-y6g8"},
      2016:{url:"https://health.data.ny.gov/resource/gnzp-ekau"}
     }
     var url=yrUrl[yr].url+'.json?'+q
     return (await fetch(url)).json()
}

jonas.unzip=function(z){
    var x=z  // unzip will go here
// example https://portal.gdc.cancer.gov/repository?filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.case_id%22%2C%22value%22%3A%5B%223a3a8fe1-e35c-45d0-aa0b-4fefa9ee9183%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_category%22%2C%22value%22%3A%5B%22Transcriptome%20Profiling%22%5D%7D%7D%5D%7D&searchTableTab=files
    
    return z 
}

jonas.loginGithub=function(){ // adds github login process

}

// ini
window.onload=function(){
    if(document.body.querySelector('#jonasDiv')){
       jonas.div=document.body.querySelector('#jonasDiv')
    }
}