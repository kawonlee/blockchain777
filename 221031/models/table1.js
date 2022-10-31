const Sequelize = require("sequelize");

module.exports = class Table1 extends Sequelize.Model {
  // class *** : 클래스 선언
  // extends : 상속, 오른쪽에 있는 걸 기본으로 왼쪽, 즉 지금 선언한 클래스를 생성한다.
  // 오른쪽에 있는 내용은 전부 왼쪽에도 있다.
  static init(sequelize) {
    // 테이블 생성
    return super.init(
      {
        // 컬럼들을 작성한다.
        column1: {
          type: Sequelize.STRING(10),
          //type을 적을 때 왜 Sequelize에서 가져올까? number나 string은 자바스크립트에도 있는데?
          // 자바스크립트에서는 숫자가 정수인지 실수인지 알 수 없다 => DB에서는 알아야한다.
          // DB에서 사용하는 자료형에 맞게 자바스크립트의 자료형을 넣어주기 위해서 sequelize 라이브러리에서 제공하는 자료형을 사용한다.
        },
        column2: {
          //   type: Sequelize.NUMBER, // << 얘는 index로 사용하지 못한다. 얘는 INT가 아니라 그냥 숫자다. FLOAT , DOUBLE 둘 중 하나 일 거다.
          type: Sequelize.INTEGER.UNSIGNED, // 0보다 크다. 음수가 아니다. 무조건 양수다. ex) -20억 ~ 20억 / unsigned 사용시 0 ~ 40억 <<
          // 용량은 그대로이기 때문에 숫자를 원하는만큼 더 사용할 수 있다.
          primaryKey: true, // 테이블 당 하나만 가능하다. 검색에 용이하다.
          unique: true, // 데이터가 중복될 수 없다.
          autoIncrement: true, // 자동 증가
        },
      },
      {
        // 테이블에 대한 기본 설정
        sequelize, // 기본 값
        timestamps: true, // created_at, updated_at을 자동으로 추가한다.
        underscored: true, // 카멜을 스네이크로 바꿀것인가. true = 바꾼다, false = 안바꿈 ex) createdAt -> created_at
        paranoid: false, // deleted_at의 추가여부 true = 추가한다 / false = 추가안한다. // 데이터를 삭제했을 때 DB에서 아예 없앨건지,
        // 아니면 남길건지 결정해라
        modelName: "Table1", // 자바스크립트에서 사용하는 이름
        tableName: "table1", // DB에 생성되는 테이블 이름
        charset: "utf8mb4", // 언어 설정 , 어떤 데이터 형식으로 저장할거냐 (36~37문단은 한세트로 생각)
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    // 관계를 위한 메서드
    db.Table1.hasMany(db.Table2, {
      // Table2를 많이 갖고 있다.
      foreignKey: "table1_column2",
      // 연결하는 키
      sourceKey: "column2",
      // 상대가 저장할 키, 상대한테 줄 키
      as: "Table2s",
      // 상대를 찾거나 추가하거나 등등에서 사용
    });
  }
};
