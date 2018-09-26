console.log('jonas2.js loaded')

jonas2=function(){
    // ini happens here
    jonas2.div=document.querySelector('#oauthDiv')
    if(!localStorage.jonas2){ // we're just starting the dance, create a peremanent store first
        localStorage.jonas2=JSON.stringify({})
        // and start the dance
        jonas2.startDancing()
    }
    if(localStorage.jonas2=='{}'){ // ready to start dancing, even localstore is ready
        jonas2.startDancing()
    }


}

jonas2.startDancing=()=>{
    // create a button
    var h = '<h3 style="color:maroon">Starting the dance with a button</h3>'
    h += '<p><button id="githubOauthBt">GitHub SignIn</button></p>'
    jonas2.div.innerHTML=h
    jonas2.githubOauthBt=jonas2.div.querySelector('#githubOauthBt')
    jonas2.githubOauthBt.style.backgroundColor='cyan'
    jonas2.githubOauthBt.onclick=jonas2.initialOauthCall
}

jonas2.initialOauthCall=()=>{
    var url = 'https://github.com/login/oauth/authorize?'+'client_id=57f5e3b0a612a710846b&redirect_uri='+location.href
    location.href=url
    //debugger
}





// ini

window.onload=jonas2
