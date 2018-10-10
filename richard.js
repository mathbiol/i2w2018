
console.log('richard.js is . . .')

richard=function(){}

richard.date=Date()

richard.unzip = function(z){
    var u=z
    return u
}


richard.getSearchParms=function(){
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

richard.loginGoogle=function(div){ // adds Google login process
    var div = div||richard.div // pick default div or the one provided
    if(div){
        // build login button
        div.innerHTML+='<div><button id="googleLoginButton">Login Google</button> <a href="'+location.origin+location.pathname+'">reset</a></div>'
        googleLoginButton.onclick=richard.doLoginGoogle
    }else{
        console.log('no div where to assemble the login button, starting programatically')
        richard.doLoginGoogle()
    }
    // redirected from oauth
    var parms = richard.getSearchParms()
    if(parms.code){
        debugger
    }
    
}

richard.doLoginGoogle=function(){
    console.log('richard click')
}

// ini
window.onload=function(){
    if(document.body.querySelector('#richardDiv')){
       richard.div=document.body.querySelector('#richardDiv')
       richard.loginGoogle()
    }
    if(document.body.querySelector('#jonasDiv')){
       jonas.div=document.body.querySelector('#jonasDiv')
       jonas.loginGithub()
       jonas.loginGoogle()
       //jonas.loginBox()
       // Stony Brook: https://sbm-it.github.io/msdn/oauth2.html
    }
}

console.log(' . . . loaded')
