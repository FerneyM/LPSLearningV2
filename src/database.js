const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:12344321@test.sylml.mongodb.net/lps_learning?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(db => console.log('DB connected'))
.catch(err => console.log(err));


module.exports = mongoose;