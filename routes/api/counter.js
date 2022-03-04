const express = require('express');
const router = express.Router();

const Counter = require('../../models/Counter'); //modal scheme

// @route    POST api/counter
// @desc     Register Counter
// @access   Public

router.post('/', async (req, res) => {
  const { counterId, currentNumber, servingStatus } = req.body;

  try {
    let counter;
    counter = new Counter({
      counterId,
      currentNumber,
      servingStatus,
    });
    await counter.save();
    res.send('Counter Registered');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/counter
// @desc     Get all Counter
// @access   Public

router.get('/', async (req, res) => {
  try {
    const counters = await Counter.find();
    res.json(counters);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
