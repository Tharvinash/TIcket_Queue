import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//redux
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getStatus } from './../../actions/status';
import { getNumber } from '../../actions/queue';
import { getCounter } from './../../actions/counter';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Customer = (props) => {
  const dispatch = useDispatch();
  const counter = props.counter.counter;

  const generateNewNumber = async () => {
    props.getNumber();
    props.getStatus();
  };

  useEffect(() => {
    props.getStatus();
    props.getCounter();
  }, [getStatus]);

  return props.loading || props.loading2 ? (
    <div />
  ) : (
    <div>
      <h1>Customer View</h1>
      <div className='centerDiv2'>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Now Serving : {props.status.status.nowServing}
              </Typography>
              <div>
                <Typography variant='h5' component='div'>
                  Last Number: {props.status.status.lastNumber}
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

                  {item.servingStatus !== 2 && item.servingStatus !== 3 ? (
                    <div style={{ backgroundColor: 'yellowgreen' }}>
                      <Typography variant='h6' component='div'>
                        {item.servingStatus}
                      </Typography>
                    </div>
                  ) : (
                    <div style={{ backgroundColor: 'red' }}>
                      <Typography variant='h6' component='div'>
                        {item.servingStatus}
                      </Typography>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent>
                  <Typography variant='h5' component='div'>
                    Counter {item.counterId}
                  </Typography>
                  <div>
                    <Typography variant='h6' component='div'>
                      {item.currentNumber}
                    </Typography>
                  </div>

                  {item.servingStatus !== 2 && item.servingStatus !== 3 ? (
                    <div style={{ backgroundColor: 'yellowgreen' }}>
                      <Typography variant='h6' component='div'>
                        {item.servingStatus}
                      </Typography>
                    </div>
                  ) : (
                    <div style={{ backgroundColor: 'red' }}>
                      <Typography variant='h6' component='div'>
                        {item.servingStatus}
                      </Typography>
                    </div>
                  )}
                </CardContent>
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
