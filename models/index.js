let users = require('../schema/users').SchemaUsers
let message = require('../schema/users').modelsMessage
let reponse = require('../schema/users').ModelReponse

exports.User= mongoose.model('User-ref',users) 
message.plugin(relationship,{relationshipPathName:'Users' })
exports.Message=mongoose.model('message-ref',message)

reponse.plugin(relationship,{relationshipPathName:['Users','Messages']})
exports.Reponse=mongoose.model('reponse-ref',reponse)


