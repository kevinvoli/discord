let users = require('../schema/users').SchemaUsers
let message = require('../schema/users').modelsMessage
let seveur= require('../schema/users').modelsServeur
let salon= require('../schema/users').ModelSalon



exports.User= mongoose.model('User',users)
exports.Salon=mongoose.model('Salon',salon)
exports.Message=mongoose.model('Message',message)
exports.Serveur=mongoose.model('Serveur',seveur)