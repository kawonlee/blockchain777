const Sequelize = require("sequelize");

module.exports = class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blockHash: {
          type: Sequelize.STRING(255),
        },

        chainId: {
          type: Sequelize.STRING(255),
        },
        from: {
          type: Sequelize.STRING(255),
        },
        gas: {
          type: Sequelize.INTEGER,
        },
        gasPrice: {
          type: Sequelize.INTEGER,
        },
        hash: {
          type: Sequelize.STRING(255),
          // 트랜잭션 해시
        },
        input: {
          type: Sequelize.STRING(255),
        },

        nonce: {
          type: Sequelize.INTEGER,
        },

        r: {
          type: Sequelize.STRING(255),
        },
        s: {
          type: Sequelize.STRING(255),
        },
        to: {
          type: Sequelize.STRING(255),
        },
        transactionIndex: {
          type: Sequelize.INTEGER,
        },
        type: {
          type: Sequelize.STRING(255),
        },
        v: {
          type: Sequelize.STRING(255),
        },

        value: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: "Transaction",
        tableName: "transaction",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Transaction.belongsTo(db.Block, {
      foreignKey: "blockNumber",
      sourceKey: "number",
    });
  }
};
