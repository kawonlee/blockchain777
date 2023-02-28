const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        difficulty: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },

        extraData: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        gasLimit: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        gasUsed: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        hash: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        miner: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },

        nonce: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        parentHash: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        size: {
          type: Sequelize.INTEGER,
        },
        stateRoot: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        timestamp: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        transactionsRoot: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: "Block",
        tableName: "block",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Block.hasMany(db.Transaction, {
      foreignKey: "blockNumber",
      targetId: "number",
    });
  }
};
