"use strict";
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define(
    "events",
    {
      id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      summary: {
        type: DataTypes.TEXT,
      },
      color: {
        type: DataTypes.STRING,
      },
      startAt : {
        type : DataTypes.DATE
      },
      endAt : {
        type : DataTypes.DATE
      },
    },
    {
      sequelize,
      modelName: "events",
      tableName: "events",
      timestamps : false
    }
  );
  return events;
};
