 // see: http://docs.sequelizejs.com/en/v3/docs/models-definition/#definition -WD
module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define('Users',
    {
      email_address:{type:DataTypes.TEXT},
    },
    {
        associate: function(models){
          models.Users.hasMany(models.Messages);
        }
    });
    return Users;
}
