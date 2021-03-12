const afficheSalon= (data)=>{
    console.log(data)
    document.querySelector("#salon.salon").innerHTML =""
    data.forEach((salon)=>{
        
        const sal= ` <div class="wrap contact ${salon.status}" data-salon="${salon.nom}" data-id="${salon._id}" >
        <div class="text">
            <div >
                <p class="name" ># ${salon.nom}</p>
                <small>salut mon free...</small>
            </div>
        </div>
        </div> `
        document.querySelector("#salon.salon").innerHTML+=sal
    })
    let salonActive=document.querySelector("#salon.salon.active")
    if(salonActive===null){

    }else{
        entreSalon({idAdd: salonActive.dataset.id})
    }
    clickSalon()
}



document.querySelectorAll("#serveur .contact").forEach((serveur)=>{
    serveur.addEventListener("click", function(e){

        if(!this.classList.contains('active')){
            const active= document.querySelector("#serveur .contact.active")
            console.log('click')
            if(active===null){
                this.classList.add("active")
                listeSalon({idAdd:this.dataset.id,statusAdd:"active"})
            }else{
                active.classList.remove("active")
                this.classList.add("active")

                listeSalon({idAdd:this.dataset.id,statusAdd:"active",idRem:active.dataset.id,statusRem:'lock'})
            }
        }
    })
})

function clickSalon(){
    document.querySelectorAll("#salon .contact").forEach((salon)=>{
        salon.addEventListener("click", function(e){
            if(!this.classList.contains('active')){
                const activeSa= document.querySelector("#salon .contact.active")
                console.log("active",activeSa)
                if(activeSa===null){
                console.log("active",activeSa)
                    this.classList.add("active")
                    document.querySelector("#chat-box").innerHTML=""
                    entreSalon({idAdd:this.dataset.id,statusRem:""})
                }else{
                    activeSa.classList.remove("active")
                    this.classList.add("active")
                    document.querySelector("#chat-box").innerHTML=""
                    const activeSe= document.querySelector("#serveur .contact.active")
                    entreSalon({idAdd:this.dataset.id,idRem:activeSa.dataset.id})
                    
                }
                
            }
        })
    })
}


const  afficheServeur= (data)=>{
    console.log(data)
    const serve=`<div class="wrap contact ${data.serveur.status}" data-id= "${data.serveur._id}" data-serveur="${data.serveur.nom}">
                    <span class="contact-status" ></span>
                    <img class="avatare" src="${data.serveur.image}" alt="serveur" />
                </div>`
    document.querySelector("#serveur ").innerHTML +=serve
    
}
