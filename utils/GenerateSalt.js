const bcrypt = require('bcryptjs');
const saltRounds = 10;

bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
        console.error('Error generating salt:', err);
    } else {
        console.log('Generated salt:', salt);
    }
});