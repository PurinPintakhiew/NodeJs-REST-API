const User = require('./User');
const Auth = require('./Auth');

User.hasOne(Auth, { foreignKey: 'userId', onDelete: 'cascade' });
Auth.belongsTo(User, { foreignKey: 'userId' });