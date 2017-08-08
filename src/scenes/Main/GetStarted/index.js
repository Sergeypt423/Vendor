import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    InputGroup,
    Input,
    Button,
    Icon,
    Text,
    View,
    Spinner,
    Body,
    Content,
} from 'native-base';
import validator from 'validator';

import AndroidBackButton from 'react-native-android-back-button';

import FormMessage from 'Vendor/src/components/FormMessage';
import * as session from 'Vendor/src/services/session';
import * as api from 'Vendor/src/services/api';

class GetStarted extends Component {
    static propTypes = {
        navigator: PropTypes.shape({
            getCurrentRoutes: PropTypes.func,
            jumpTo: PropTypes.func,
        }),
    }

    constructor(props) {
        super(props);

        this.initialState = {
            isLoading: false,
            error: null,
            email: '',
            password: '',
        };
        this.state = this.initialState;
    }

    onIUnderstand() {
        dismissKeyboard();
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[6]);
    }

    onPressBack() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[4]);
    }

    onPressForward() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[6]);
    }

    renderError() {
        if (this.state.error) {
            return (
                <Text
                    style={{ color: 'red', marginBottom: 20 }}
                >
                    {this.state.error}
                </Text>
            );
        }
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#3CA1F2' }}>
                    <Button
                        onPress={() => this.onPressBack()}
                        title="Learn More"
                        transparent
                    >
                        <Icon name="ios-arrow-back" style={{ color: '#F9FCFE' }} />
                        <Text style={{ color: '#F9FCFE' }}>Back</Text>
                    </Button>
                    <Body>
                        <Title style={{ color: '#F9FCFE' }}>Choose vendor type</Title>
                    </Body>
                </Header>
                <Content style={{ backgroundColor: '#F9FCFE' }}>
                    <TouchableWithoutFeedback
                        onPress={dismissKeyboard}
                    >
                        <View
                            style={{ padding: 30, flex: 1 }}
                        >
                            <Text style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }} transparent>Let's get started</Text>
                            <Text style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center', fontSize: 12, textAlign: 'center' }} transparent>
                                What kind of vendors are looking for?
                            </Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', width: 310, margin: 20, marginTop: 250, alignContent:'center'}}>
                                <Button
                                    style={{ height: 40,  width: 150, justifyContent: 'center', backgroundColor: '#3B5898', padding:20}}
                                    onPress={() => this.onIUnderstand()}
                                >
                                    <Text style={{ color: '#F9FCFE' }}>Flat Rate</Text>
                                </Button>
                                <Button
                                    style={{ height: 40, width: 150, justifyContent: 'center', backgroundColor: '#3CA1F2', padding: 20, marginLeft: 10}}
                                    onPress={() => this.onIUnderstand()}
                                >
                                    <Text style={{ color: '#F9FCFE' }}>Hourly Rate</Text>
                                </Button>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <AndroidBackButton
                        onPress={() => this.onPressBack()}
                    />
                </Content>
            </Container>
        );
    }
}

export default GetStarted;