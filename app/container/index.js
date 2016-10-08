import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../header/';

export default class Container extends Component {

    render() {
        return (
            <View>
                <Header title="October"/>
            </View>
        );
    }
}
