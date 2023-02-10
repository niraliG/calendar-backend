const { list, add, update, deleteEvent, upcominglist } = require("../Models/events.model");
async function listEvents(req, res) {
  try {
    const eventList = await list();
    res.status(200).send(eventList);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function addEvent(req, res) {
  try {
    const id = await add(req.body);
    res.sendStatus(200).send(id);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function updateEvent(req, res) {
  try {
    const updatedEvent = await update(req.body);
    res.status(200).send(updatedEvent);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function delEvent(req, res) {
  try {
    const deletedEvent = await deleteEvent(req.body);
    res.sendStatus(200).send(deletedEvent);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function listUpcomingEvents(req, res) {
  try {
    const eventList = await upcominglist();
    res.status(200).send(eventList);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
module.exports = {
  listEvents,
  addEvent,
  updateEvent,
  delEvent,
  listUpcomingEvents
};
