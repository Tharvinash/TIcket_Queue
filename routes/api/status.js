const express = require('express');
const router = express.Router();

const Status = require('../../models/Status'); //modal scheme

// @route    GET api/status
// @desc     Get status of number
// @access   Public

router.get('/', async (req, res) => {
  try {
    const status = await Status.find();
    res.json(status);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
