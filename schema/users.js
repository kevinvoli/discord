exports.SchemaUsers= new mongoose.Schema({
  nom: {type:String},
  pseudo: {type:String},
  password: {type:String,require:true},
  email:  {type:String,require:true, unique:true},
  number:  {type:String,require:true},
  image:{type: String, default:'/public/img/avatar.png'},
  message:[{ type:mongoose.Schema.ObjectId, ref:'Message' }],
  status:{type: String, default:'Offline' },
  server:[{type:mongoose.Schema.ObjectId,ref:'Serveur'}],
  facebook:{type:String, default:''},
  dateAt:{type:Date, default:Date.now},
  dateUp:{type:Date,default:Date.now},
  
})
exports.ModelSalon= new mongoose.Schema({
  nom:{type: String, default:'General'},
  image:{type:String,default:"/public/img/avatar.png"},
  description:{type:String, default:'ajoute description'},
  server: { type:mongoose.Schema.ObjectId, ref:"Serveur", childPath:"Serveur" },
  users:[{type:mongoose.Schema.ObjectId, ref:'User'}],
  messages:[{type:mongoose.Schema.ObjectId,ref:'Message'}],
  status:{type:String,default:"lock"},
  dateAt:{type:Date, default:Date.now},
  dateUp:{type:Date,default:Date.now},
})

exports.modelsParticipant= new mongoose.Schema({
  id_Serveur:[{type:mongoose.Schema.ObjectId, ref: 'Serveur'}],
  id_Users:[{type:mongoose.Schema.ObjectId, ref: 'User'}],
  dateAt:{type:Date,default:Date.now},
  dateUp:{type:Date,default:Date.now},
})

exports.modelsServeur= new mongoose.Schema({
  nom:{type:String},
  admin:{type:mongoose.Schema.ObjectId,ref:"User"},
  image:{type:String,default:"/public/img/avatar1.png"},
  salon:[{ type:mongoose.Schema.ObjectId, ref:'Salon' }],
  status:{type:String,default:"lock"},
  dateAt:{type:Date,default:Date.now},
  dateUp:{type:Date,default:Date.now},
})
exports.modelsMessage= new mongoose.Schema({
    message:{type: String, default:''},
    Users: { type:mongoose.Schema.ObjectId, ref:"User", childPath:"message" },
    serveur:{type:mongoose.Schema.ObjectId, ref: "Serveur", childPath:"message"},
    salon:{type:mongoose.Schema.ObjectId, ref: "Salon"},
    DateAt: {type:Date, default:Date.now},
    DateUp: {type:Date, default:Date.now}
})
