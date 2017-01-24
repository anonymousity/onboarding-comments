 module.exports = function(sequelize, DataTypes){
    var Messages = sequelize.define('Messages',
    {
      title:{type:DataTypes.STRING},
      body:{type:DataTypes.TEXT},
      author_id:{type:DataTypes.INTEGER},
    },
    {
        associate: function(models){
          // models.UserData.hasMany(models.something);
        }
    });
    return Messages;
}
