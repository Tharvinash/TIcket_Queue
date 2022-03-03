import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Customer = () => {
  return (
    <div>
      <h1>Customer View</h1>
      <div className='centerDiv2'>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Now Serving : werwerwerwe
              </Typography>
              <div>
                <Typography variant='h5' component='div'>
                  Last Number: werwerwerw
                </Typography>
              </div>
              <Stack spacing={2}>
                <Button variant='contained'>Take A Number</Button>
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className='centerDiv2'>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Counter 1
              </Typography>
              <div>
                <Typography variant='h6' component='div'>
                  Current Number
                </Typography>
              </div>

              <div style={{ backgroundColor: 'yellowgreen' }}>
                <Typography variant='h6' component='div'>
                  Status
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Counter 2
              </Typography>
              <div>
                <Typography variant='h6' component='div'>
                  Current Number
                </Typography>
              </div>

              <div style={{ backgroundColor: 'yellowgreen' }}>
                <Typography variant='h6' component='div'>
                  Status
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Counter 3
              </Typography>
              <div>
                <Typography variant='h6' component='div'>
                  Current Number
                </Typography>
              </div>

              <div style={{ backgroundColor: 'yellowgreen' }}>
                <Typography variant='h6' component='div'>
                  Status
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Counter 4
              </Typography>
              <div>
                <Typography variant='h6' component='div'>
                  Current Number
                </Typography>
              </div>

              <div style={{ backgroundColor: 'yellowgreen' }}>
                <Typography variant='h6' component='div'>
                  Status
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Customer;
