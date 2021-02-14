let users = require('../schema/users').SchemaUsers
let message = require('../schema/users').modelsMessage
// let reponse = require('../schema/users').ModelReponse
let seveur= require('../schema/users').modelsServeur


exports.User= mongoose.model('User',users)

exports.Message=mongoose.model('Message',message)

// exports.Reponse=mongoose.model('Reponse',reponse)

exports.Serveur=mongoose.model('Serveur',seveur)