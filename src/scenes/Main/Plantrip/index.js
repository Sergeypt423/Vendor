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
import SimpleStepper from 'react-native-simple-stepper'
import FormMessage from 'Vendor/src/components/FormMessage';
import * as session from 'Vendor/src/services/session';
import * as api from 'Vendor/src/services/api';

class Plantrip extends Component {
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

    onPressBack() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[6]);
    }

    onPressForward() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[8]);
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
                <Header style={{ backgroundColor:'#3CA1F2'}}>
                    <Button
                        onPress={() => this.onPressBack()}
                        title="Learn More"
                        transparent
                    >
                        <Icon name="ios-arrow-back" style={{ color:'#F9FCFE'}}/>
                        <Text style={{ color:'#F9FCFE'}}>Back</Text>
                    </Button>
                    <Body>
                        <Title style={{ color: '#F9FCFE' }}>Plan your trip</Title>
                    </Body>
                    <Button
                        onPress={() => this.onPressForward()}
                        transparent
                    >
                        <Text style={{ color: '#F9FCFE' }}>Next</Text>
                    </Button>
                </Header>
                <Content style={{backgroundColor: '#F9FCFE'}}>
                    <TouchableWithoutFeedback
                        onPress={dismissKeyboard}
                    >
                        <View>
                            <Text style={{ padding: 10, fontWeight: 'bold'}}>Where are you moving from?</Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10 }}>
                                <Text>Address:</Text>
                                <Input
                                    placeholder=""
                                    keyboardType="name-phone-pad"
                                    autoCorrect={false}
                                    autoCapitalize="none"
//                                    onChangeText={email => this.setState({ email })}
//                                    value={this.state.email}
                                />
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10 }}>
                                <Text>City:</Text>
                                <Input
                                    placeholder=""
                                    keyboardType="name-phone-pad"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                //                                    onChangeText={email => this.setState({ email })}
                                //                                    value={this.state.email}
                                />
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10 }}>
                                <Text>Building Type:</Text>
                                <Button
                                    style={{paddingLeft: 15}}
                                    onPress={() => this.onPressForward()}
                                    transparent
                                >
                                    <Text style={{ color: '#3CA1F2' }}>Please select</Text>
                                </Button>
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10, paddingBottom: 5, paddingTop: 5 }}>
                                <Text>Rooms:</Text>
                                <Text style={{paddingLeft: 15, paddingRight: 40}}>1</Text>
                                <SimpleStepper tintColor='#3CA1F2'/>
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />


                            <Text style={{ padding: 10, fontWeight: 'bold'}}>What is your destination?</Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10 }}>
                                <Text>Address:</Text>
                                <Input
                                    placeholder=""
                                    keyboardType="name-phone-pad"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                //                                    onChangeText={email => this.setState({ email })}
                                //                                    value={this.state.email}
                                />
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10 }}>
                                <Text>City:</Text>
                                <Input
                                    placeholder=""
                                    keyboardType="name-phone-pad"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                //                                    onChangeText={email => this.setState({ email })}
                                //                                    value={this.state.email}
                                />
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10 }}>
                                <Text>Building Type:</Text>
                                <Button
                                    style={{ paddingLeft: 15 }}
                                    onPress={() => this.onPressForward()}
                                    transparent
                                >
                                    <Text style={{ color: '#3CA1F2' }}>Please select</Text>
                                </Button>
                            </InputGroup>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10, paddingBottom: 5, paddingTop: 5 }}>
                                <Text>Rooms:</Text>
                                <Text style={{ paddingLeft: 15, paddingRight: 40 }}>1</Text>
                                <SimpleStepper tintColor='#3CA1F2'/>
                            </InputGroup>
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

export default Plantrip;
