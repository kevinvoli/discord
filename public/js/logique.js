// const settings= document.querySelector('#settings')
// const addcontact=  document.querySelector('#addcontact')

const salonActive= document.querySelector("#salon .contact.active")      
let MyId= document.querySelector("form.formulaire button").dataset.id

const afficheMessage= (data)=>{
    console.log("message recue:",data)
    
    if(MyId===data.Users){
    console.log("message Users:",data)
        let messages=`<div class="message-box envoie"><div> <img class="avatare" src="<%= data.users.image%>" alt="" /></div>
        <div class="message-text"> <p>${data.message} </p></div></div>`
        document.querySelector('.main-section .chat-box').innerHTML += messages
        document.querySelector('.message-input input').value=null;
        // document.querySelector(".messages").animate({ scrollTo: this.innerHeight},console.log("le this",this.innerHeight));
        let messa=  document.querySelector(".main-section .chat-box ")
        document.querySelector(".messages").scrollTop=messa.scrollTopMax

    }else{
        let messages=`<div class="message-box recue"><div> <img class="avatare" src="<%= data.users.image%>" alt="" /></div>
        <div class="message-text"> <p>${data.message} </p></div></div>`
        document.querySelector('.main-section .chat-box').innerHTML +=messages
        document.querySelector('.message-input input').value=null;
        // let messa =document.querySelector(".messages").animate({ scrollTo:this.innerHeight});
        let messa=  document.querySelector(".main-section .chat-box")
        document.querySelector(".messages").scrollTop=messa.scrollTopMax
    }
}

const  newAjoute=()=>{
    const ajoute= document.querySelector(".ajoute input.new-ajoute")
    if (ajoute.dataset.id==="serveur") {
        newServeur(ajoute.value)
        ajoute.value=""
    }else{
        const serve= document.querySelector("#serveur .active").dataset.id
        newSalon({value:ajoute.value,serveur:serve})
        ajoute.value=""
    }
}

document.querySelector(".action button.new-server").addEventListener("click",(e)=>{
    document.querySelector(".ajoute").style.display='block'
    document.querySelector('.ajoute  input.new-ajoute').dataset.id="serveur"
})

document.querySelector(".action button.new-salon").addEventListener("click",(e)=>{
    document.querySelector(".ajoute").style.display='block'
    document.querySelector('.ajoute  input.new-ajoute').dataset.id="salon"
})

document.querySelector(".ajoute button i.fa-window-close").addEventListener("click",(e)=>{
    document.querySelector(".ajoute").style.display='none'
})





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
    const serveur = document.querySelector("#serveur .contact.active")
    const salon = document.querySelector("#salon .contact.active")
    let data= {
        message:document.querySelector('.formulaire .messageEnv').value.trim(),
        id:document.querySelector("form.formulaire button").dataset.id,
        serveur:serveur.dataset.id,
        salon:salon.dataset.id
    }
    if(message===''){
        return false
    }else{
        
        envoiMessage(data)
    }
})

function checkServeur(){

    if(document.querySelectorAll("#serveur .contact.active")!=null||document.querySelectorAll("#serveur .contact.active")!=undefined){
        // const serveurActive=document.querySelector("#serveur .contact.active")
        // listeSalon({idAdd:serveurActive.dataset.id,statusAdd:"active",idRem:"",statusRem:'lock'})
    }else{
        const serveurActive=document.querySelector("#serveur .contact.active")
        listeSalon({idAdd:serveurActive.dataset.id,statusAdd:"active",idRem:"",statusRem:'lock'})
    }
}


// function checkSalon(serv){
//     if (document.querySelectorAll("#salon .contact")!=null||document.querySelectorAll("#salon .contact")!=undefined) {
//         document.querySelectorAll("#salon .contact").forEach((salon)=>{
//             if (salon.classList.contains("active")) {
//                 listeSalon({idRem:serv.idAdd,idAdd:salon.dataset.id})
//             }
//         })
//     }
// }


// const salons= document.querySelectorAll("#salon .contact")


