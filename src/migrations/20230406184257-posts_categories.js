'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'blog_posts',
        key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'categories',
        key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    },
      {timestamps: false},
    );
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('posts_categories'),
};
