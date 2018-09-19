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

jonas.loginGithub=function(div){ // adds github login process
    var div = div||jonas.div // pick default div or the one provided
    if(div){
        // build login button
        div.innerHTML='<button id="githubLoginButton">Login Github</button> <a href="'+location.origin+location.pathname+'">reset</a>'
        githubLoginButton.onclick=jonas.doLoginGithub
    }else{
        console.log('no div where to assemble the login button, starting programatically')
        jonas.doLoginGithub()
    }
    // redirected from oauth
    var parms = jonas.getSearchParms()
    if(parms.code){
        //continue oauth dance
        if(localStorage.githubLoginState!==parms.state){
            Error('redirect state does not match - are you a hacker? ')
        }
        var url = 'https://github.com/login/oauth/access_token?client_id='+localStorage.githubClientId+'&client_secret='+localStorage.githubClientKey+'&code='+parms.code+'&redirect_uri='+location.origin+location.pathname+'&state='+parms.state
        alert('github wants a proxy! more at href="http://andreybleme.com/2018-02-24/oauth-github-web-flow-cors-problem, that explains when they require secrets')
        /*
        fetch(
          url,
          {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json'
            }
          }).json().then(tk=>{
                lala=tk
                debugger
            })
        */
    }

    //debugger
}

jonas.doLoginGithub=function(){
    // cpnfigured at https://github.com/settings/developers
    localStorage.githubClientId='42f472114e5af4f9fbd3'
    localStorage.githubClientKey='94c660bae276ee6c705aeb838aafced92942ac23' // if you share it in a web app remember not to count on it being secret in a proxy for the same application
    // following flow at https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow
    localStorage.githubLoginState=Math.random().toString().slice(2)
    location.href="https://github.com/login/oauth/authorize?client_id="+localStorage.githubClientId+"&redirect_uri="+location.origin+location.pathname+'&state='+localStorage.githubLoginState
    //debugger
}

jonas.getSearchParms=function(){
    var parms={}
    location.search.slice(1)
            .split('&')
            .map(q=>{
                return q.split('=')
            }).forEach(av=>{
                parms[av[0]]=av[1]
            })
    return parms

}

// ini
window.onload=function(){
    if(document.body.querySelector('#jonasDiv')){
       jonas.div=document.body.querySelector('#jonasDiv')
       jonas.loginGithub()
       //jonas.loginGoogle()
       //jonas.loginBox()
       // Stony Brook: https://sbm-it.github.io/msdn/oauth2.html
    }
}