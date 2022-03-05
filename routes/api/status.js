const express = require('express');
const router = express.Router();

const Status = require('../../models/Status'); //modal scheme

// @route    GET api/status
// @desc     Get number status 
// @access   Public

router.get('/', async (req, res) => {
  try {
    let status = await Status.find();
    let latestStatus = status[0]
    res.json(latestStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
