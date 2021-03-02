exports.SchemaUsers= new mongoose.Schema({
  nom: String,
  pseudo: {type:String,require:true},
  password: {type:String,require:true},
  email:  {type:String,require:true, unique:true},
  number:  {type:String,require:true},
  image:{type: String, default:'/public/img/avatar.png'},
  message:[{ type:mongoose.Schema.ObjectId, ref:'Message' }],
  status:{type: String, default:'Offline' },
  facebook:{type:String, default:''},
  googleTokens:Array,
  dateAt:{type:Date, default:Date.now},
  dateUp:{type:Date,default:Date.now},
  
})
exports.ModelSalon= new mongoose.Schema({
  nom:{type: String, default:''},
  description:{type:String, default:''},
  Server: { type:mongoose.Schema.ObjectId, ref:"Serveur", childPath:"salon" },
  users:{type:mongoose.Schema.ObjectId, ref:'User'},
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
  admin:{type:String},
  dateAt:{type:Date,default:Date.now},
  dateUp:{type:Date,default:Date.now},
})


exports.modelsMessage= new mongoose.Schema({
    message:{type: String, default:''},
    Users: { type:mongoose.Schema.ObjectId, ref:"User", childPath:"message" },
    serveur:{type:mongoose.Schema.ObjectId, ref: "Serveur", childPath:"message"},
    salon:{type:mongoose.Schema.ObjectId, ref: "Salon"},
    DateAt: {type:Date, default:Date.now},
    DateUp: {type:Date, defailt:Date.now}
  })


