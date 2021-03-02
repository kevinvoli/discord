

    const socket= io('http://localhost:3000/chat')
    
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