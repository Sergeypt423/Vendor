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

class Warning extends Component {
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
        this.props.navigator.jumpTo(routeStack[7]);
    }

    onPressBack() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[5]);
    }

    onPressForward() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[5]);
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
                        <Title style={{ color: '#F9FCFE' }}>Flat rate booking</Title>
                    </Body>
                    <Button
                        onPress={() => this.onPressForward()}
                        transparent
                    >
                        <Text style={{ color: '#F9FCFE' }}>Cancel</Text>
                    </Button>
                </Header>
                <Content style={{ backgroundColor: '#F9FCFE' }}>
                    <TouchableWithoutFeedback
                        onPress={dismissKeyboard}
                    >
                        <View
                            style={{ padding: 30, flex: 1 }}
                        >
                            <Text style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }} transparent>About Flat rate bookings</Text>
                            <Text style={{ marginTop: 100, alignSelf: 'center', justifyContent: 'center', fontSize: 12, textAlign: 'center' }} transparent>Flat rate
                                vendors require that you list each of the items you are moving with their corresponding quantities</Text>
                            <Button
                                style={{ marginTop: 250, marginBottom: 20, alignSelf: 'center', width: 200, justifyContent: 'center', backgroundColor: '#3B5898' }}
                                onPress={() => this.onIUnderstand()}
                            >
                                <Text style={{ color: '#F9FCFE' }}>I Understand</Text>
                            </Button>
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

export default Warning;
