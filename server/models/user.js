module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", // mySql 에 posts 테이블 생성
    {
      email: {
        type: DataTypes.STRING(50),
        allowNull: false, // 필수
        unique: true, // 고유한 값
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false, // 필수
      },
      nickname: {
        type: DataTypes.STRING(30),
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글  + 이모티콘 사용
    }
  );

  User.associate = (db) => {
    // user 가 여러개의 post 를 가질 수 있음
    db.Post.hasMany(db.Post);
  };

  return User;
};
