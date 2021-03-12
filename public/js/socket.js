    const socket= io('http://localhost:3000/chat')  
    socket.on("connect",()=>{
        checkServeur()
    })
    function newServeur(data){
        socket.emit("newServeur",data)
    }
    socket.on("newServeur",(data)=>{
       afficheServeur(data)
    })
    function newSalon(data){
        console.log("DDDe",data)
        socket.emit("newSalon",data)
    }
    socket.on("newSalon",(data)=>{
        afficheSalon(data)
    })
    function listeSalon(data){
        socket.emit("listeSalon",data)
    }
    socket.on("listeSalon",(data)=>{
        // document.querySelector("#salon.salon").innerHTML =""
        afficheSalon(data)
    })
    function connectSalon(data){
        console.log(data)
        socket.emit("init-salon",data)
    }
    function entreSalon(data){
        socket.emit("entre_salon",data)
    }
    function deconection(data){
    socket.emit('deco',data)
    socket.on('deconecter',(data)=>{
        location.href= "/chat"
    })
    }
    const statuss= (data)=>{
        socket.emit('statusChange',data)
    }
    socket.on('refreshStatus',(data)=>{
        refreshStatus(data)
    })

    // socket.on('userDeco',(data)=>{
    //     document.querySelector('.alert-success p').textContent=`${data.pseudo} vient de ce connecte`
    // })

    const envoiMessage = (data)=>{
        socket.emit('sendMessage',data)
    }

    socket.on('evoiMssage',(data)=>{
        afficheMessage(data)
    })
    const ecritur= ()=>{
        let input = document.querySelector(".message-input input")
        input.addEventListener('keyup',(e)=>{
            socket.emit('userWrit')
           
        })
    }