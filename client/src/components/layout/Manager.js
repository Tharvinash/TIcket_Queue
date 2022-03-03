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

const Manager = () => {
  return (
    <div>
      <h1>Counter Management</h1>
      <div className='centerDiv'>
        <div className='inlineCounter'>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Counter 1
              </Typography>
              <div>
                <Stack spacing={2}>
                  <Button variant='contained'>Go Offline</Button>
                  <Button variant='contained'>Call Current</Button>
                  <Button variant='contained'>Call Next</Button>
                </Stack>
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
                <Stack spacing={2}>
                  <Button variant='contained'>Go Offline</Button>
                  <Button variant='contained'>Call Current</Button>
                  <Button variant='contained'>Call Next</Button>
                </Stack>
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
                <Stack spacing={2}>
                  <Button variant='contained'>Go Offline</Button>
                  <Button variant='contained'>Call Current</Button>
                  <Button variant='contained'>Call Next</Button>
                </Stack>
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
                <Stack spacing={2}>
                  <Button variant='contained'>Go Offline</Button>
                  <Button variant='contained'>Call Current</Button>
                  <Button variant='contained'>Call Next</Button>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Manager;
