module.exports = (sequelizer, DataTypes) => {
  const PostCategory = sequelizer.define(
    'PostCategory', 
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        model: 'blog_posts',
        key: 'id',
        references: {
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
          },
          onDelete: 'CASCADE',
          primaryKey: true,
        },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
    );
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'PostId',
      });
    }
    return PostCategory;
};