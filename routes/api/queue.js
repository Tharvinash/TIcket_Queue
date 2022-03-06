const express = require('express');
const router = express.Router();

const Queue = require('../../models/Queue'); //modal scheme
const Counter = require('../../models/Counter'); //modal scheme
const Status = require('../../models/Status'); //modal scheme

// @route    POST api/queue
// @desc     Create New Number
// @access   Public

router.post('/', async (req, res) => {
  try {
    const numbers = await Queue.find().sort('timeReleased');
    let LatestNumber = numbers.pop().number;
    let NewNumber = LatestNumber + 1;
    let queue;

    queue = new Queue({
      number: NewNumber,
    });

    await queue.save();
    
    res.json(queue);
    UpdateLastNumber(NewNumber);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/queue/status
// @desc     Udate latest number in status
// @access   Public

const UpdateLastNumber = async (NewNumber) => {
  // router.post('/', async (req, res) => {
  try {
    const status = await Status.find();
    if (status.length > 0) {
      let finalStatus = await Status.updateOne(
        { _id: status[0]._id },
        {
          lastNumber: NewNumber,
        }
      );
    } else {
      let status;
      status = new Status({
        lastNumber: NewNumber,
        nowServing: 0000,
      });
      await status.save();
    }
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server error');
  }
  //});
};

// @route    POST api/queue/status
// @desc     Udate latest number in now serving in Counter
// @access   Public

router.post('/currentnumber/:counterId', async (req, res) => {
  try {
    let counterId = req.params.counterId
    const numbers = await Queue.find().sort({ timeReleased: -1 });
    let numberObject = numbers.pop();
    let LatestNumber = numberObject.number;
    let RemovedNumberID = numberObject._id;

    let counter = await Counter.findOneAndUpdate(
      { _id: counterId },
      {
        currentNumber: LatestNumber,
        servingStatus: 2,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json(counter);
    // console.log({ LatestNumber, RemovedNumberID });
    NowServing(RemovedNumberID, LatestNumber);
  } catch (err) {
    console.error(err.message);
  }
});

const NowServing = async (RemovedNumberID, LatestNumber) => {
  try {
    //delete number form queue
    let removed = await Queue.findOneAndRemove({ _id: RemovedNumberID });

    //update number into LatestServingNumber

    const status = await Status.find();
    if (status.length > 0) {
      let finalStatus = await Status.updateOne({
        nowServing: LatestNumber,
      });
    } else {
      let status;
      status = new Status({
        lastNumber: 0000,
        nowServing: 0000,
      });
      await status.save();
    }
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server error');
  }
};

// @route    POST api/queue
// @desc     Get All Number
// @access   Public
router.get('/', async (req, res) => {
  try {
    const numbers = await Queue.find();
    res.json(numbers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
