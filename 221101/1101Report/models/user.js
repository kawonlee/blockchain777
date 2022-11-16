const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(50),
          unique: true,
        },
        pw: {
          type: Sequelize.STRING(255),
        },

        nickname: {
          type: Sequelize.STRING(50),
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        underscored: true,
        modelName: "User",
        tableName: "user",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    User.hasMany(db.Chat, {
      foreignKey: "user_id",
      sourceKey: "id",
      as: "Chats",
    });
  }
};
