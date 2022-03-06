import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//component

//redux
import { connect } from 'react-redux';
import { goOffline, completeCurrent } from './../../actions/counter';
import { callNext } from './../../actions/queue';
import { setAlert } from '../../actions/alert';
import { getStatus } from './../../actions/status';

const Manager = (props) => {
  const counter = props.counter.counter;
  const status = props.status.status;
  const toggleOffline = async (counterId) => {
    props.goOffline(counterId);
  };

  useEffect(() => {
    props.getStatus();
  }, []);

  const completeCurrentNumber = async (counterId) => {
    props.completeCurrent(counterId);
  };

  const callNextNumber = async (counterId) => {
    if (status.nowServing === status.lastNumber) {
      props.setAlert('Queue is empty !', 'danger');
    } else {
      props.callNext(counterId);
    }
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
  status: state.status,
});

export default connect(mapStateToProps, {
  goOffline,
  completeCurrent,
  callNext,
  setAlert,
  getStatus,
})(Manager);
