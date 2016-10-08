import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from 'native-base';

const styles = require('./style.js');
// Images
const calendarIcon = require('../../resources/calendar.png');

export default class HeaderApp extends Component {
    render() {
        return (
            <Header style={styles.header} >
                <Image source={calendarIcon} />
                <Text>{this.props.title}</Text>
            </Header>
        );
    }
}
