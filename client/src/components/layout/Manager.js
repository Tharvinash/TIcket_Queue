import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//component
import Connect from './Connect';
//redux
import { connect } from 'react-redux';
import { goOffline, completeCurrent } from './../../actions/counter';
import { callNext } from './../../actions/queue';


const Manager = (props) => {
  const counter = props.counter.counter;
  const toggleOffline = async (counterId) => {
    props.goOffline(counterId);
  };

  const completeCurrentNumber = async (counterId) => {
    props.completeCurrent(counterId);
  };

  const callNextNumber = async (counterId) => {
    props.callNext(counterId);
  };

  return props.loading2 ? (
    <div />
  ) : (
    <div>
      <h1>Counter Management</h1>
      <div className='centerDiv'>
        {counter.map((item, index) => (
          <div key={index} className='inlineCounter'>
            <Card>
              <CardContent className='inlineCounter2'>
                <Typography variant='h5' component='div' fontWeight={600}>
                  Counter {item.counterId}
                </Typography>
                <div>
                  <div>
                    {item.servingStatus === 3 ? (
                      <Button
                        onClick={() => toggleOffline(item._id)}
                        variant='contained'
                      >
                        Go Online
                      </Button>
                    ) : (
                      <Stack spacing={2}>
                        <Button
                          onClick={() => toggleOffline(item._id)}
                          variant='contained'
                        >
                          Go Offline
                        </Button>
                        <Button
                          onClick={() => completeCurrentNumber(item._id)}
                          variant='contained'
                        >
                          Complete Current
                        </Button>
                        <Button
                          onClick={() => callNextNumber(item._id)}
                          variant='contained'
                        >
                          Call Next
                        </Button>
                      </Stack>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, {
  goOffline,
  completeCurrent,
  callNext,
})(Manager);
