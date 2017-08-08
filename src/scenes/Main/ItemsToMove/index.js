import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
    TouchableWithoutFeedback,
    Alert,
    Image,
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
import { width, height, totalSize } from 'react-native-dimension';
import Switch from 'react-native-switch-pro';
import AndroidBackButton from 'react-native-android-back-button';
import SimpleStepper from 'react-native-simple-stepper'
import FormMessage from 'Vendor/src/components/FormMessage';
import * as session from 'Vendor/src/services/session';
import * as api from 'Vendor/src/services/api';

class ItemsToMove extends Component {
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
        this.props.navigator.jumpTo(routeStack[8]);
    }

    onPressForward() {
        const routeStack = this.props.navigator.getCurrentRoutes();
        this.props.navigator.jumpTo(routeStack[9]);
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
                        <Title style={{ color: '#F9FCFE' }}>Items you move</Title>
                    </Body>
                    <Button
                        onPress={() => this.onPressForward()}
                        transparent
                    >
                        <Text style={{ color: '#F9FCFE' }}>Next</Text>
                    </Button>
                </Header>
                <Content style={{backgroundColor: '#F9FCFE'}}>
                        <View>
                            <Text style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }} transparent>
                                Tell us about the items to move
                            </Text>
                            <Text style={{ marginTop: 20, alignSelf: 'center',paddingBottom: 30, justifyContent: 'center', fontSize: 12, textAlign: 'center' }} transparent>
                                Use the field below to enter of your items. Tell us which items require assembly/disassembly
                            </Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 18, paddingRight: 10, padding:10, borderBottomWidth:0 }}>
                                <Input 
                                    placeholder="type your item here..."
                                    style={{ flex: 8 ,height: 40,padding: 5, borderWidth: 1, borderColor:'#F3F3F3', borderRadius:10}}
                                    keyboardType="name-phone-pad"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                                <Button style={{ flex: 1 }}
                                    onPress={() => this.onPressForward()}
                                    transparent
                                >
                                    <Text style={{ color: '#3CA1F2', fontWeight:'bold' }}>Add</Text>
                                </Button>
                            </InputGroup>
                            <Text style={{ padding: 5,paddingTop:0, paddingLeft: 30, fontSize: 12, color: '#B3B3B3'}}>e.g. 5 chairs or 1 sofa</Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F3F3F3',
                                    width: 400,
                                }}
                            />
                            <InputGroup style={{ paddingLeft: 10, paddingRight: 20 }}>
                                <Text style={{ padding: 10, flex: 1, fontSize: 14,fontWeight: 'bold' }}>Item</Text>
                                <Text style={{ padding: 10, flex: 1,fontSize:12,fontWeight:'bold' }}>Assemble/Disassemble?</Text>
                            </InputGroup>
                            <InputGroup style={{ paddingLeft: 5, paddingRight: 20 }}>
                                <Text style={{ padding: 5, flex: 8 }}>Two tables</Text>
                                <Switch
                                    style={{ flex: 1 }}
                                    value={true}
                                    // onValueChange={(val) => console.log(val)}
                                    disabled={false}

                                />
                            </InputGroup>
                            <InputGroup style={{ paddingLeft: 5, paddingRight: 20 }}>
                                <Text style={{ padding: 5, flex: 8 }}>4 chairs</Text>
                                <Switch
                                    style={{ flex: 1 }}
                                    value={true}
                                    // onValueChange={(val) => console.log(val)}
                                    disabled={false}

                                />
                            </InputGroup>
                            

                            <Button
                                style={{
                                    position: 'absolute', top: height(70),borderRadius: 35,
                                    left: width(75), width: 70, height: 70, backgroundColor: '#F27C13',
                                    alignItems: 'center', justifyContent: 'center' }}
                            >   
                               <Image
                                style={{ width: 40, height: 40}}
                                    source={require('Vendor/imgs/camera.png')}
                               />
                            </Button>
                        </View>
                    <AndroidBackButton
                        onPress={() => this.onPressBack()}
                    />
                </Content>
            </Container>
        );
    }
}

export default ItemsToMove;
