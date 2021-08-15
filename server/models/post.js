module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", // mySql 에 posts 테이블 생성
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false, // 필수
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false, // 필수
        unique: true, // 고유한 값
      },
      image: {
        type: DataTypes.STRING(200),
      },
      hashTag: {
        type: DataTypes.STRING(30),
      },

      // UserId: 1 belongsTo 가 이런 컬럼을 만들어 줌
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글  + 이모티콘 사용
    }
  );

  Post.associate = (db) => {
    // post는 user에 속해 있음
    db.Post.belongsTo(db.User);
  };

  return Post;
};
