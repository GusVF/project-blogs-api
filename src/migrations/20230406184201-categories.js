'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoriesTable = await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    },
      {timestamps: false},
    )
    return CategoriesTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('categories'),
};
