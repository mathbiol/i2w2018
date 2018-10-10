
console.log('richard.js is . . .')

richard=function(){}

richard.date=Date()

richard.unzip = function(z){
    var u=z
    return u
}


richard.learnLinear = async function(div){
    //var div = div||richard.div // pick default div or the one provided
    const model = tf.sequential();
    model.add(tf.layers.dense({units : 1,
                               inputShape: [1]}
                             )
             );
    model.compile({
      loss: 'meanSquaredError',
      optimizer: 'sgd'
      });
    const xs = tf.tensor2d([1, 2, 3, 4, 5],[5,1]);
    const ys = tf.tensor2d([1, 2, 3, 4, 5],[5,1]);
    await model.fit(xs, ys, {epochs:500});
    var result = model.predict(tf.tensor2d([1],[1,1]))
    document.getElementById(div).innerHTML+=result
    console.log('... end of ts')
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
