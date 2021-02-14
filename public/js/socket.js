
    const socket= io('http://localhost:3000/chat')
    
    function deconection(data){
        console.log(data)
    socket.emit('deco',data)
    socket.on('deconecter',(data)=>{
        location.href= "/chat"
    })
    }
    const statuss= (data)=>{
        socket.emit('statusChange',data)
    }
    socket.on('refreshStatus',(data)=>{
        let status= document.querySelector(`.a${data.id}`)
            status.classList.forEach(clas=>{
                if(clas==='online'|| clas==='away'||clas==='busy'|| clas==='offline'){
                    status.classList.remove(clas)
                }
            })
            status.classList.add(data.status)
        
    })

    socket.on('userDeco',(data)=>{
        document.querySelector('.alert-success p').textContent=`${data.pseudo} vient de ce connecte`
    })

    let monId
    function sendMessage(id){
        monId=id
       let mesg = document.querySelector(".message-input input").value;
       if(mesg.trim() === '') {
        return false;
        }
        let data= {
            message: mesg,
            id: id
        }
        socket.emit('sendMessage',data)
      
    }
    socket.on('evoiMssage',(data)=>{
        if (monId===data.Users) {
            let messages=`<li class="replies"><img src="<%= user.image%>" alt="" /><p>  ${data.message} </p></li>`
            let ul= document.querySelector('.messages ul').innerHTML.split()
            ul.push(messages).toString()
            document.querySelector('.messages ul').innerHTML= ul
            document.querySelector('.message-input input').value=null;
            
            // document.querySelector('.message-input input');
            // document.querySelector('.contact.active .preview').innerHTML='<span>You: </span>' + data.message
            document.querySelector('.message-input input');
            document.querySelector(".messages").animate({ scrollTop: document.height});
            
        } else {
            let messages=`<li class="sent"><img src="<%= user.image%>" alt="" /><p>  ${data.message} </p></li>`
            let ul= document.querySelector('.messages ul').innerHTML.split()
            ul.push(messages).toString()
            document.querySelector('.messages ul').innerHTML=ul
            document.querySelector('.message-input input').value=null;
            // document.querySelector('.contact.active .preview').innerHTML='<span>You: </span>' + data.message;
            document.querySelector(".messages").animate({ scrollTop: document.height});
        }

    })
    const ecritur= ()=>{
        let input = document.querySelector(".message-input input")
        input.addEventListener('keyup',(e)=>{
            socket.emit('userWrit')
           
        })
    }