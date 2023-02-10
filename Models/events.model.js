const { Op, Sequelize } = require("sequelize");
const { events } = require("../Database/Models");
async function list() {
  const eventList = await events.findAll({
    order: [["startAt", "DESC"]],
  });
  return eventList;
}
async function add(eventObj) {
  const { id } = await events.create({
   ...eventObj
  });
  return id;
}
async function update(body) {
  const updatedEvent = await events.update({
   ...body
  }, {
    where : {
      id : body.id,
    }
  });
  return updatedEvent;
}
async function deleteEvent(body) {
  const deletedEvent = await events.destroy({
    where : {
      id : body.id,
    }
  });
  return deletedEvent;
}
async function upcominglist() {
  const eventList = await events.findAll({
    where  : {
      startAt : {
        [Op.gt] : Sequelize.literal("NOW()")
      }
      
    },
    order: [["startAt", "ASC"]],
  });
  return eventList;
}
module.exports = {
  list,
  add,
  update,
  deleteEvent,
  upcominglist
};
