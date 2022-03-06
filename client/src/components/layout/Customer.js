import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//component
import Connect from './Connect';
//redux
import { connect } from 'react-redux';
import { getStatus } from './../../actions/status';
import { getNumber } from '../../actions/queue';
import { getCounter } from './../../actions/counter';


const Customer = (props) => {
  const [value, setValue] = useState(0); // integer state
  const status = props.status.status;
  const counter = props.counter.counter;

  const generateNewNumber = async () => {
    props.getNumber();
    props.getStatus();
    UseForceUpdate();
  };

  function UseForceUpdate() {
    setValue((value) => value + 1); // update the state to force render
  }

  useEffect(() => {
    console.log('UseEffect');
    props.getStatus();
    props.getCounter();
    props.getStatus();
  }, [value]);

  return props.loading || props.loading2 ? (
    <div />
  ) : (
    <div>
      <h1>Customer View</h1>
      <div className='centerDiv2'>
        <div className='inlineCounter'>
          <Card>
            <CardContent className='inlineCounter2'>
              <Typography variant='h5' component='div'>
                Now Serving :{' '}
                <text style={{ fontWeight: '600' }}>{status.nowServing}</text>
              </Typography>
              <div>
                <Typography variant='h5' component='div'>
                  Last Number :{' '}
                  <text style={{ fontWeight: '600' }}>{status.lastNumber}</text>
                </Typography>
              </div>
              <Stack spacing={2}>
                <Button onClick={generateNewNumber} variant='contained'>
                  Take A Number
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='centerDiv2'>
        {counter.map((item, index) => (
          <div key={index} className='inlineCounter'>
            {item.servingStatus === 3 ? (
              <Card style={{ backgroundColor: 'grey' }}>
                <CardContent>
                  <Typography variant='h5' component='div'>
                    Counter {item.counterId}
                  </Typography>
                  <div>
                    <Typography variant='h6' component='div'>
                      {item.currentNumber}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant='h6' component='div' fontWeight={600}>
                      Counter Offline
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                {item.servingStatus !== 2 && item.servingStatus !== 3 ? (
                  <CardContent className='inlineCounter2'>
                    <span className='dotGreen'></span>
                    <Typography variant='h5' component='div'>
                      Counter {item.counterId}
                    </Typography>

                    <div>
                      <Typography>Serving Number :</Typography>
                      <Typography variant='h6' component='div' fontWeight={600}>
                        {item.currentNumber}
                      </Typography>
                    </div>
                  </CardContent>
                ) : (
                  <CardContent className='inlineCounter2'>
                    <span className='dotRed'></span>
                    <Typography variant='h5' component='div'>
                      Counter {item.counterId}
                    </Typography>

                    <div>
                      <Typography>Serving Number :</Typography>
                      <Typography variant='h6' component='div' fontWeight={600}>
                        {item.currentNumber}
                      </Typography>
                    </div>
                  </CardContent>
                )}
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  status: state.status,
  counter: state.counter,
});

export default connect(mapStateToProps, { getNumber, getStatus, getCounter })(
  Customer
);
