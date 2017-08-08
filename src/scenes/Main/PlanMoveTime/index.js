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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import FormMessage from 'Vendor/src/components/FormMessage';
import * as session from 'Vendor/src/services/session';
import * as api from 'Vendor/src/services/api';

class PlanMoveTime extends Component {
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
        this.onDayPress = this.onDayPress.bind(this);
    }

    onIUnderstand() {
        dismissKeyboard();
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[7]);
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString

        });
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
                        <Title style={{ color: '#F9FCFE' }}>Plan your move</Title>
                    </Body>
                    <Button
                        onPress={() => this.onPressForward()}
                        transparent
                    >
                        <Text style={{ color: '#F9FCFE' }}>Next</Text>
                    </Button>
                </Header>
                <Content style={{ backgroundColor: '#F9FCFE' }}>
                    <TouchableWithoutFeedback
                        onPress={dismissKeyboard}
                    >
                        <View
                            style={{ padding: 30, flex: 1 }}
                        >
                            <Text style={{ marginTop: 0, alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }} transparent>
                                Tell us when you want to move
                            </Text>
                            <Text style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center', fontSize: 15, textAlign: 'center' }} transparent>
                                Please select an available Date
                            </Text>
                            <Calendar
                                onDayPress={this.onDayPress}
                                style={{
                                    borderTopWidth: 1,
                                    paddingTop: 20,
                                    borderBottomWidth: 1,
                                    borderColor: '#eee',
                                    height: 350
                                }}
                                markedDates={{ [this.state.selected]: { selected: true } }}
                                theme={{
                                    textSectionTitleColor: 'gray',
                                    dayTextColor: 'black',
                                    todayTextColor: 'black',
                                    selectedDayTextColor: 'white',
                                    monthTextColor: 'black',
                                    selectedDayBackgroundColor: '#157efb',
                                    arrowColor: 'red'
                                }}
                                hideArrows={false}
                            />
                            <Button
                                style={{ marginTop: 500, marginBottom: 20, alignSelf: 'center', width: 200, justifyContent: 'center', backgroundColor: '#3B5898' }}
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

export default PlanMoveTime;
