// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import { Toolbox } from './Components/Toolbox';
import { SettingsPanel } from './Components/SettingsPanel';
import { Topbar } from './Components/Topbar';

import { Container } from './Components/User/Container';
import { Button } from './Components/User/Button';
import { Card } from './Components/User/Card';
import { Text } from './Components/User/Text';

export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Grid container spacing={3} style={{paddingTop: "10px"}}>
        <Topbar />
        <Grid item xs>
          <Container padding={5} background="#eee">
            <Card />
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Paper>
              <Toolbox />
              <SettingsPanel />
          </Paper>          
        </Grid>
      </Grid>
    </div>
  );
}
