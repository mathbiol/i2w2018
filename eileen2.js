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