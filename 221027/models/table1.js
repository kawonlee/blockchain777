const Sequelize = require("sequelize");

module.exports = class Table1 extends Sequelize.Model {
  static init(sequelize) {
    // static = class를 new하지 않고 메서드를 불러온다.
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER, // INT
          primaryKey: true, // 고유 식별 키이냐?
          autoIncrement: true, // index 값 자동 증가
          unique: true, // 값이 중복되면 안된다.
          allowNull: false, // 비면 안된다.
        },
        name: { type: Sequelize.STRING(45), allowNull: true }, // varchear == STRING()
        // password: { type: Sequelize.STRING(256), allowNull: true },
        id: { type: Sequelize.STRING(45), allowNull: true },
        // create_at: {
        //   type: Sequelize.DATE,
        //   allowNull: false,
        //   defaultValue: Sequelize.NOW, // 기본값은 현재 시간
        // },
      },
      {
        sequelize, // 기본값으로 넣어라
        timestamps: true, // createAt, updateAt 자동으로 추가 // 생성하거나 업데이트 할 때마다 자동으로 기록을 남겨줌
        underscored: true, // 테이블과 컬럼명을 카멜케이스로 수정
        modelName: "NewTable1", // 자바스크립트에서 사용하는 테이블명
        tableName: "new_table1", // mysql에 존재하는(있는) 테이블명
        paranoid: false, // 삭제 시 deletedAt를 저장할지, 테이블에서 데이터를 삭제 시 아예 삭제할 지, 삭제할 날짜를 남김으로써 데이터를 남길것인지
        charset: "utf8mb4", // 언어포맷설정
        collate: "utf8mb4_general_ci", // 언어 포맷설정
      }
    );
  }
  static associate(db) {
    // 관계 맺는 것
    // db.NewTable1
  }
};
