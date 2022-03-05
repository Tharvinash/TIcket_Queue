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

// @route    POST api/counter/counterstatus
// @desc     Set Counter Out Of Service
// @access   Public

router.post('/counterstatus/:counterId', async (req, res) => {
  try {
    let counterId = req.params.counterId
    let status = 0;
    let counter = await Counter.findById(counterId);

    if (counter.servingStatus === 3) {
      status = 1;
    } else {
      status = 3;
    }
    // console.log(status)
    let counter1 = await Counter.findOneAndUpdate(
      { _id: counterId },
      {
        servingStatus: status,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    const countersV2 = await Counter.find();
    res.json(countersV2);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/counter/completecurrent
// @desc     Complete Current
// @access   Public

router.post('/completecurrent/:counterId', async (req, res) => {
  try {
    let counterId = req.params.counterId
    let counter = await Counter.findById(counterId);
    let status = 1;
    if (counter.servingStatus === 2) {
      status =1;
    }
    let counter1 = await Counter.findOneAndUpdate(
      { _id: counterId },
      {
        servingStatus: status,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    const countersV2 = await Counter.find();
    res.json(countersV2);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
