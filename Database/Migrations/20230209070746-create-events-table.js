"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false,
        default : "new event"
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
        default : "yellow"
      },
      startAt : {
        type : Sequelize.DATE,
        allowNull: false,
      },
      endAt : {
        type : Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
