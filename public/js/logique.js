// const settings= document.querySelector('#settings')
// const addcontact=  document.querySelector('#addcontact')

       
let MyId= document.querySelector("form.formulaire button").dataset.id

// settings.addEventListener("click",(e)=>{
//     e.preventDefault()

// })

// addcontact.addEventListener("click",(e)=>{
//     e.preventDefault()

// })

const afficheMessage= (data)=>{
    console.log("message recue:",data)
    if(MyId===data.Users){
    console.log("message Users:",data)

        let messages=`<div class="message-box envoie"><div> <img class="avatare" src="<%= user.image%>" alt="" /></div>
        <div class="message-text"> <p>${data.message} </p></div></div>`
        document.querySelector('.main-section .chat-box').innerHTML += messages
        document.querySelector('.message-input input').value=null;
        // document.querySelector(".messages").animate({ scrollTo: this.innerHeight},console.log("le this",this.innerHeight));
        let messa=  document.querySelector(".main-section .chat-box ")
        document.querySelector(".messages").scrollTop=messa.scrollTopMax

    }else{
    console.log("message profil:",data)

        let messages=`<div class="message-box recue"><div> <img class="avatare" src="<%= user.image%>" alt="" /></div>
        <div class="message-text"> <p>${data.message} </p></div></div>`
        document.querySelector('.main-section .chat-box').innerHTML +=messages
        document.querySelector('.message-input input').value=null;
        // let messa =document.querySelector(".messages").animate({ scrollTo:this.innerHeight});
        let messa=  document.querySelector(".main-section .chat-box")
        document.querySelector(".messages").scrollTop=messa.scrollTopMax
    }
}

const refreshStatus= (data)=>{
    let status= document.querySelector(`.a${data.id}`)
    status.classList.forEach(clas=>{
        if(clas==='online'|| clas==='away'||clas==='busy'|| clas==='offline'){
            status.classList.remove(clas)
        }
    })
    status.classList.add(data.status)
}


const form = document.querySelector("form.formulaire").addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log('le formulaire')
    let data= {
        message:document.querySelector('.formulaire .messageEnv').value.trim(),
        id:document.querySelector("form.formulaire button").dataset.id
    }
    if(message===''){
        return false
    }else{
        
        envoiMessage(data)
    }
})

