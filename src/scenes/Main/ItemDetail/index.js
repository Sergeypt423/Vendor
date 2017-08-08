import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
    TouchableWithoutFeedback,
    Alert,
    ScrollView,
    Easing,
    Image,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    InputGroup,
    Footer,
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
import Rating from 'react-native-rating'
import { width, height, totalSize } from 'react-native-dimension';
import Switch from 'react-native-switch-pro';
import AndroidBackButton from 'react-native-android-back-button';
import SimpleStepper from 'react-native-simple-stepper'
import FormMessage from 'Vendor/src/components/FormMessage';
import * as session from 'Vendor/src/services/session';
import ReadMore from '@expo/react-native-read-more-text';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import * as api from 'Vendor/src/services/api';

class ItemDetail extends Component {
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
        this.onDayPress = this.onDayPress.bind(this);
        this.state = {};
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ position: 'absolute', color: '#0000ff', bottom: 0, right: 0}} onPress={handlePress}>
                ... read more
          </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#0000ff', bottom: 0 , left: 0}} onPress={handlePress}>
                show less
           </Text>
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
            
        });
    }

    onPressBack() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[3]);
    }

    onPressBookJob() {
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
                <Content style={{backgroundColor: '#F9FCFE'}}>
                    <ScrollView>
                        <View style={{height: 250}}>
                            <Image style={{ left: 0, top: 0, width: width(100), height: 250}}
                              source={require('Vendor/imgs/car.png')}/>
                            <Image style={{ position:'absolute',backgroundColor: 'rgba(0,0,0,0)', right: 20, top: 30,width:20, height:20 }}
                                source={require('Vendor/imgs/bookmark.png')} />
                            <Button
                                onPress={() => this.onPressBack()}
                                transparent
                                style={{ position: 'absolute', left: 0, top: 30, width: 20, height: 20 }}
                            >
                                <Icon name="ios-arrow-back" style={{ color: 'rgba(255,255,255,1)'}} />
                            </Button>
                        </View>
                        <View >
                            <Text style={{ fontSize:30, fontWeight:'bold', padding:20 }}>Mobile Boxes Etc.</Text>
                            <Text style={{ fontSize: 15, paddingLeft: 20}}>7292 Dictum Av. San Antonio MI 47096</Text>
                        </View>
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#F3F3F3',
                                width: 400,
                                padding:20,
                                left:20
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>Our services</Text>
                            <View style={{padding:20}}>
                                <ReadMore 
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    totalSize={width-20}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, padding: 20, paddingTop: 0, paddingBottom: 0 }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#F3F3F3',
                                width: 400,
                                paddingLeft: 20,
                                left: 20
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>What we can move</Text>
                            <View style={{ padding: 20 }}>
                                <ReadMore
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    totalSize={width - 20}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, padding: 20, paddingTop: 0, paddingBottom: 0  }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio M 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#F3F3F3',
                                width: 400,
                                paddingLeft: 20,
                                left: 20
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>Features</Text>
                            <ScrollView horizontal={true} style={{height:width(43), padding:20, paddingTop:0}}>
                                <View style={{width:width(25)-10, padding:10, flexDirection:'column'}}>
                                    <Image style={{ left: 0, top: 0 ,width: width(12),height: width(12), alignSelf:'center'}}
                                        source={require('Vendor/imgs/featured1.png')} />
                                    <Text style={{textAlign:'center', paddingTop:10}}>Boxes</Text>
                                </View>
                                <View style={{ width: width(25)-10, padding: 10, flexDirection: 'column' }}>
                                    <Image style={{ left: 0, top: 0, width: width(12), height: width(12), alignSelf: 'center' }}
                                        source={require('Vendor/imgs/featured1.png')} />
                                    <Text style={{ textAlign: 'center', paddingTop: 10 }}>Boxes</Text>
                                </View>
                                <View style={{ width: width(25)-10, padding: 10, flexDirection: 'column' }}>
                                    <Image style={{ left: 0, top: 0, width: width(12), height: width(12), alignSelf: 'center' }}
                                        source={require('Vendor/imgs/featured1.png')} />
                                    <Text style={{ textAlign: 'center', paddingTop: 10 }}>Boxes</Text>
                                </View>
                                <View style={{ width: width(25)-10, padding: 10, flexDirection: 'column' }}>
                                    <Text style={{ left: 0, top: 0, width: width(12), height: width(12), alignSelf: 'center', fontSize:width(8) ,
                                    color: '#157efb'}}>
                                        +8
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{padding: 20, paddingBottom:20}}>
                            <InputGroup>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 ,flex:5 }}>Availability</Text>
                                <Button style={{ flex: 4 }} transparent>
                                    <Text style={{ fontSize: 13,color: '#157efb', alignSelf:'flex-end' }}>Check availability</Text>
                                </Button>
                            </InputGroup>
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
                                    arrowColor: 'gray'
                                }}
                                hideArrows={false}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>Special Terms</Text>
                            <View style={{ padding: 20 }}>
                                <ReadMore
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    totalSize={width - 20}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, padding: 20, paddingTop: 0, paddingBottom: 0 }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio M 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#F3F3F3',
                                width: 400,
                                paddingLeft: 20,
                                left: 20
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>About the Vendor</Text>
                            <View style={{ padding: 20 }}>
                                <ReadMore
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    totalSize={width - 20}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, padding: 20, paddingTop: 0, paddingBottom: 0 }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio M 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#F3F3F3',
                                width: 400,
                                paddingLeft: 20,
                                left: 20
                            }}
                        />
                        <View style={{ padding: 20, paddingBottom: 20 }}>
                            <InputGroup>
                                <View style={{width: 40, height: 40, backgroundColor: '#00ff00',borderRadius:20 , justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20, color: '#FFFFFF', backgroundColor:'rgba(0,0,0,0)',alignSelf:'center' }} >HR</Text>
                                </View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', padding: 20, flex: 5 }}>Helena Rush</Text>
                                <Rating
                                    onChange={rating => console.log(rating)}
                                    selectedStar={require('Vendor/imgs/star_filled.png')}
                                    unselectedStar={require('Vendor/imgs/star_unfilled.png')}
                                    config={{
                                        easing: Easing.inOut(Easing.ease),
                                        duration: 350
                                    }}
                                    style={{flex:4}}
                                    max={5}
                                    stagger={80}
                                    initial={5}
                                    maxScale={1}
                                    starStyle={{
                                        width: 15,
                                        height: 15
                                    }}
                                />
                            </InputGroup>
                            <View style={{ padding: 20, paddingLeft:0 }}>
                                <ReadMore
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, paddingTop: 0, paddingBottom: 0 }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio M 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <View style={{ padding: 20, paddingBottom: 20 }}>
                            <InputGroup>
                                <View style={{ width: 40, height: 40, backgroundColor: '#00ff00', borderRadius: 20, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#FFFFFF', backgroundColor: 'rgba(0,0,0,0)', alignSelf: 'center' }} >HR</Text>
                                </View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', padding: 20, flex: 5 }}>Helena Rush</Text>
                                <Rating
                                    onChange={rating => console.log(rating)}
                                    selectedStar={require('Vendor/imgs/star_filled.png')}
                                    unselectedStar={require('Vendor/imgs/star_unfilled.png')}
                                    config={{
                                        easing: Easing.inOut(Easing.ease),
                                        duration: 350
                                    }}
                                    style={{ flex: 4 }}
                                    max={5}
                                    stagger={80}
                                    initial={5}
                                    maxScale={1}
                                    starStyle={{
                                        width: 15,
                                        height: 15
                                    }}
                                />
                            </InputGroup>
                            <View style={{ padding: 20, paddingLeft: 0 }}>
                                <ReadMore
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, paddingTop: 0, paddingBottom: 0 }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio M 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <View style={{ padding: 20, paddingBottom: 20 }}>
                            <InputGroup>
                                <View style={{ width: 40, height: 40, backgroundColor: '#00ff00', borderRadius: 20, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#FFFFFF', backgroundColor: 'rgba(0,0,0,0)', alignSelf: 'center' }} >HR</Text>
                                </View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', padding: 20, flex: 5 }}>Helena Rush</Text>
                                <Rating
                                    onChange={rating => console.log(rating)}
                                    selectedStar={require('Vendor/imgs/star_filled.png')}
                                    unselectedStar={require('Vendor/imgs/star_unfilled.png')}
                                    config={{
                                        easing: Easing.inOut(Easing.ease),
                                        duration: 350
                                    }}
                                    style={{ flex: 4 }}
                                    max={5}
                                    stagger={80}
                                    initial={5}
                                    maxScale={1}
                                    starStyle={{
                                        width: 15,
                                        height: 15
                                    }}
                                />
                            </InputGroup>
                            <View style={{ padding: 20, paddingLeft: 0 }}>
                                <ReadMore
                                    numberOfLines={5}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>
                                    <Text style={{ fontSize: 15, paddingTop: 0, paddingBottom: 0 }}>
                                        7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 7292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio M 470967292 Dictum Av. San Antonio MI 470967292 Dictum Av. San Antonio MI 47096
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                        <Button style={{ backgroundColor: '#F3F3F3', width: (width(100)), alignSelf: 'center', justifyContent: 'center'}}>
                            <Text style={{ color: '#157efb'}}>
                                Show more reviews
                            </Text>
                        </Button>
                    </ScrollView>
                    <AndroidBackButton
                        onPress={() => this.onPressBack()}
                    />
                </Content>
                <Footer style={{ height: 60 }}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{ width: width(50), height: 50, flexDirection:'column'}}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', paddingTop: 10, paddingLeft: 3, flex:1}}>Hourly</Text>
                            <View style={{ flexDirection: 'row' , flex:1}}>
                                <Rating
                                    onChange={rating => console.log(rating)}
                                    selectedStar={require('Vendor/imgs/star_filled.png')}
                                    unselectedStar={require('Vendor/imgs/star_unfilled.png')}
                                    config={{
                                        easing: Easing.inOut(Easing.ease),
                                        duration: 350
                                    }}
                                    max={5}
                                    stagger={80}
                                    initial={5}
                                    maxScale={1}
                                    starStyle={{
                                        width: 15,
                                        height: 15
                                    }}
                                />
                                <Text style={{ fontSize: 10, color: '#afb1b6' }}>
                                    14 Reviews
							</Text>
                            </View>
                            
                        </View>
                        <Button onPress={() => this.onPressBookJob()} style={{ width:width(40),height:40, backgroundColor: '#157efb', borderRadius: 3, padding: 20, alignSelf: 'center', justifyContent: 'center'}}>
                            <Text style={{ color: '#FFFFFF' }}>Book a job</Text>
                        </Button>
                    </View>
                </Footer>
            </Container>
        );
    }
}

export default ItemDetail;
