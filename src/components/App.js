"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import Courses from "./Courses";
import Radium , {StyleRoot} from "radium";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class App extends React.Component {
	getChildContext() {
	    return { muiTheme: getMuiTheme() };
	  }
  render() {
    let styles = {
      root: {
        fontFamily: 'sans-serif'
      },
      header: {
        backgroundColor: '#00bcd4',
        height: '8.4rem',
        width: '100%',
        textAlign: 'center'
      },
      logo: {
        fontWeight: '600',
        fontSize: '3rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff'
      }
    };
    return (
      <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <div style={styles.logo}>Haoqicat</div>
          <Courses />
        </header>
      </StyleRoot>
    );
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

