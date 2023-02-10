var express = require("express");
const { listEvents, addEvent, updateEvent, delEvent,listUpcomingEvents  } = require("../../Controllers/events.controller");
var router = express.Router();

router.get("/getEvents",  listEvents);
router.post("/addEvent",  addEvent);
router.put("/updateEvent",  updateEvent);
router.delete("/deleteEvent",  delEvent);
router.get("/getUpcomingEvents",  listUpcomingEvents);

module.exports = router;
