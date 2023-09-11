const User = require('./User');
const Auth = require('./Auth');

User.hasOne(Auth, { foreignKey: 'user_id', onDelete: 'cascade', hooks: true });
Auth.belongsTo(User, { foreignKey: 'user_id' });