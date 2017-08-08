import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
	TouchableWithoutFeedback,
	ScrollView,
	Easing,
	Image,
	Alert,
} from 'react-native';
import {
	Container,
	Header,
	Title,
	InputGroup,
	Input,
	Button,
	Item,
	Footer,
	FooterTab,
	Icon,
	Text,
	View,
	Body,
	Content,
} from 'native-base';

import validator from 'validator';
import Switch from 'react-native-switch-pro';
import { width, height, totalSize } from 'react-native-dimension';
import AndroidBackButton from 'react-native-android-back-button';
import SimpleStepper from 'react-native-simple-stepper'
import SearchBar from 'react-native-searchbar';
import Rating from 'react-native-rating'
import FormMessage from 'Vendor/src/components/FormMessage';
import * as session from 'Vendor/src/services/session';
import * as api from 'Vendor/src/services/api';

class Home extends Component {
	static propTypes = {
		navigator: PropTypes.shape({
			getCurrentRoutes: PropTypes.func,
			jumpTo: PropTypes.func,
		}),
	}

	constructor(props) {
		super(props);

		this.initialState = {
			selectedTab: 'Home',
		};
		this.state = this.initialState;
	}

	onPressBack() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[0]);
	}

	onPressForward() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[0]);
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

	toItemsDetail() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[4]);
	}

	onAdd(){

	}

	renderHomeFeatured(){
		return (
			<View style={{height: 350}}>
				<InputGroup>
					<Text style={{flex:10 , fontWeight:'bold'}}>Featured</Text>
					<Button style={{flex:3}} transparent>
						<Text style={{ color: '#96999f'}}>See all ></Text>
					</Button>
				</InputGroup>

				<ScrollView horizontal={true} >
					<View style={{flexDirection: 'column', padding: 10}}>
						<View style={{ width: 150, height: 200, flexDirection: 'column'}}>
							<TouchableWithoutFeedback style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} onPress={() => this.toItemsDetail()}>
								<Image
									style={{
										width: 150, height: 200, flex: 1, flexDirection: 'column', borderRadius:5 }}
									source={require('Vendor/imgs/car.png')}
								/>
							</TouchableWithoutFeedback>
							<View style={{ opacity: 1, backgroundColor:'rgba(0,0,0,0)',
								position: 'absolute', top: 10, width: 20, height: 20, right: 10}}>
								<Image style={{	backgroundColor: 'rgba(0,0,0,0)',width: 20,height: 20}} 
								source={require('Vendor/imgs/bookmark.png')} />
							</View>
						</View>
						<Text style={{fontWeight:'bold'}}>CWS Logistics</Text>
						<Text style={{ fontSize: 13 }}>Hourly</Text>
						<View style={{flexDirection: 'row'}}>
							<Rating
								onChange={rating => console.log(rating)}
								selectedStar={require('Vendor/imgs/star_filled.png')}
								unselectedStar={require('Vendor/imgs/star_unfilled.png')}
								config={{
									easing: Easing.inOut(Easing.ease),
									duration: 350
								}}
								max = {5}
								stagger={80}
								initial={5}
								maxScale={1}
								starStyle={{
									width: 15,
									height: 15
								}}
							/>
							<Text style={{ fontSize: 10, color:'#afb1b6'}}>
								14 Reviews
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'column', padding: 10 }}>
						<View style={{ width: 150, height: 200, flexDirection: 'column' }}>
							<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
								<Image
									style={{
										width: 150, height: 200, flex: 1, flexDirection: 'column', borderRadius: 5
									}}
									source={require('Vendor/imgs/car.png')}
								/>
							</View>
							<View style={{
								opacity: 1, backgroundColor: 'rgba(0,0,0,0)',
								position: 'absolute', top: 10, width: 20, height: 20, right: 10
							}}>
								<Image style={{ backgroundColor: 'rgba(0,0,0,0)', width: 20, height: 20 }}
									source={require('Vendor/imgs/bookmark.png')} />
							</View>
						</View>
						<Text style={{ fontWeight: 'bold' }}>CWS Logistics</Text>
						<Text style={{ fontSize: 13 }}>Hourly</Text>
						<View style={{ flexDirection: 'row' }}>
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
					<View style={{ flexDirection: 'column', padding: 10 }}>
						<View style={{ width: 150, height: 200, flexDirection: 'column' }}>
							<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
								<Image
									style={{
										width: 150, height: 200, flex: 1, flexDirection: 'column', borderRadius: 5
									}}
									source={require('Vendor/imgs/car.png')}
								/>
							</View>
							<View style={{
								opacity: 1, backgroundColor: 'rgba(0,0,0,0)',
								position: 'absolute', top: 10, width: 20, height: 20, right: 10
							}}>
								<Image style={{ backgroundColor: 'rgba(0,0,0,0)', width: 20, height: 20 }}
									source={require('Vendor/imgs/bookmark.png')} />
							</View>
						</View>
						<Text style={{ fontWeight: 'bold' }}>CWS Logistics</Text>
						<Text style={{ fontSize: 13 }}>Hourly</Text>
						<View style={{ flexDirection: 'row' }}>
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
					<View style={{ flexDirection: 'column', padding: 10 }}>
						<View style={{ width: 150, height: 200, flexDirection: 'column' }}>
							<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
								<Image
									style={{
										width: 150, height: 200, flex: 1, flexDirection: 'column', borderRadius: 5
									}}
									source={require('Vendor/imgs/car.png')}
								/>
							</View>
							<View style={{
								opacity: 1, backgroundColor: 'rgba(0,0,0,0)',
								position: 'absolute', top: 10, width: 20, height: 20, right: 10
							}}>
								<Image style={{ backgroundColor: 'rgba(0,0,0,0)', width: 20, height: 20 }}
									source={require('Vendor/imgs/bookmark.png')} />
							</View>
						</View>
						<Text style={{ fontWeight: 'bold' }}>CWS Logistics</Text>
						<Text style={{ fontSize: 13 }}>Hourly</Text>
						<View style={{ flexDirection: 'row' }}>
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
				</ScrollView>
			</View>
		);
	}

	renderHomeNearYou(){
		return this.renderHomeFeatured();
	}

	renderHomeBestRated(){
		return this.renderHomeFeatured();
	}

	renderHomeBestDays(){
		return (
			<View style={{ height: 300}}>
				<InputGroup style={{borderWidth:0, height: 40, paddingBottom:10}}>
					<Text style={{ flex: 3, fontWeight: 'bold' }}>Best days to move</Text>
				</InputGroup>
				<View style={{ flexDirection:'row', height:250, borderWidth:0}}>
					<View style={{ width: width(14), padding:5}}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0,height: 200, width:width(14)}}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor:'#dcdde1', borderRadius:3}}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position:'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop:10 ,color: '#dcdde1', textAlign: 'center', width: width(14)}}>Sun</Text>
					</View>
					<View style={{ width: width(14), padding: 5 }}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0, height: 200, width: width(14) }}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor: '#dcdde1', borderRadius: 3 }}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position: 'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop: 10, color: '#dcdde1', textAlign: 'center', width: width(14) }}>Mon</Text>
					</View>
					<View style={{ width: width(14), padding: 5 }}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0, height: 200, width: width(14) }}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor: '#dcdde1', borderRadius: 3 }}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position: 'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop: 10, color: '#dcdde1', textAlign: 'center', width: width(14) }}>Tue</Text>
					</View>
					<View style={{ width: width(14), padding: 5 }}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0, height: 200, width: width(14) }}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor: '#dcdde1', borderRadius: 3 }}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position: 'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop: 10, color: '#dcdde1', textAlign: 'center', width: width(14) }}>Wed</Text>
					</View>
					<View style={{ width: width(14), padding: 5 }}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0, height: 200, width: width(14) }}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor: '#dcdde1', borderRadius: 3 }}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position: 'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop: 10, color: '#dcdde1', textAlign: 'center', width: width(14) }}>Thu</Text>
					</View>
					<View style={{ width: width(14), padding: 5 }}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0, height: 200, width: width(14) }}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor: '#dcdde1', borderRadius: 3 }}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position: 'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop: 10, color: '#dcdde1', textAlign: 'center', width: width(14) }}>Fri</Text>
					</View>
					<View style={{ width: width(14), padding: 5 }}>
						<View style={{ flexDirection: 'column', position: 'absolute', top: 0, left: 0, height: 200, width: width(14) }}>
							<View style={{ left: width(7), top: 0, width: 6, height: 200, backgroundColor: '#dcdde1', borderRadius: 3 }}>
							</View>
						</View>
						<View style={{ flexDirection: 'column', top: -5, left: -5, height: 200, width: width(14) }}>
							<View style={{ position: 'absolute', left: width(7), bottom: 0, width: 6, height: 100, backgroundColor: '#157efb', borderRadius: 3 }}>
							</View>
						</View>
						<Text style={{ paddingTop: 10, color: '#dcdde1', textAlign: 'center', width: width(14) }}>Sat</Text>
					</View>
				</View>
			</View>	
		);
	}

	renderHomeWeather(){
		return(
			<View style={{ height: 400}}>
				<InputGroup style={{ borderWidth: 0 }}>
					<Text style={{ flex: 3, fontWeight: 'bold' }}>Weather</Text>
					<Button style={{ flex: 2, alignSelf: 'flex-end' }} transparent>
						<Text style={{ color: '#96999f', alignSelf: 'center' }}>Los Angeles ⋁</Text>
					</Button>
				</InputGroup>
				<View style={{ flexDirection: 'column', borderWidth: 0 }}>
					<View style={{ height: 50, padding: 5, flexDirection:'row'}}>
						<View style={{ flex: 1}}>
							<InputGroup style={{ borderWidth: 0, flex:1 }}>
								<Image
									style={{  width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{flex: 1}}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end',paddingTop:10, flex:1}}>Wed, Apr 16</Text>
						</View>
					</View>
					<View style={{ height: 50, padding: 5, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputGroup style={{ borderWidth: 0, flex: 1 }}>
								<Image
									style={{ width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end', paddingTop: 10, flex: 1 }}>Thu, Apr 17</Text>
						</View>
					</View>
					<View style={{ height: 50, padding: 5, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputGroup style={{ borderWidth: 0, flex: 1 }}>
								<Image
									style={{ width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end', paddingTop: 10, flex: 1 }}>Fri, Apr 18</Text>
						</View>
					</View>
					<View style={{ height: 50, padding: 5, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputGroup style={{ borderWidth: 0, flex: 1 }}>
								<Image
									style={{ width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end', paddingTop: 10, flex: 1 }}>Sat, Apr 19</Text>
						</View>
					</View>
					<View style={{ height: 50, padding: 5, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputGroup style={{ borderWidth: 0, flex: 1 }}>
								<Image
									style={{ width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end', paddingTop: 10, flex: 1 }}>Sun, Apr 20</Text>
						</View>
					</View>
					<View style={{ height: 50, padding: 5, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputGroup style={{ borderWidth: 0, flex: 1 }}>
								<Image
									style={{ width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end', paddingTop: 10, flex: 1 }}>Mon, Apr 21</Text>
						</View>
					</View>
					<View style={{ height: 50, padding: 5, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputGroup style={{ borderWidth: 0, flex: 1 }}>
								<Image
									style={{ width: 35, height: 30 }}
									source={require('Vendor/imgs/sunny.png')}
								/>
								<Text style={{ paddingLeft: 20, fontSize: 20 }}>+24°</Text>
								<Text style={{ fontSize: 18 }}>/+18°</Text>
							</InputGroup>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ color: '#96999f', alignSelf: 'flex-end', paddingTop: 10, flex: 1 }}>Tue, Apr 22</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}

	renderHome(){
		return (
			<ScrollView style={{
				flex: 1,
				flexDirection: 'column',
			}}>
				{this.renderHomeFeatured()}
				{this.renderHomeNearYou()}
				{this.renderHomeBestRated()}
				{this.renderHomeBestDays()}
				{this.renderHomeWeather()}
			</ScrollView>
		);
	}

	renderFavourites(){
		return (
			<View style={{flex:1}}>
				<Text>Favourites</Text>
			</View>
		);
	}

	renderBooking(){
		return (
			<View style={{flex:1}}>
				<Text>Booking</Text>
			</View>
		);
	}

	renderSettings(){
		return (
			<View style={{flex:1}}>
				<Text>Favourites</Text>
			</View>
		);
	}

	renderContent(){
		if (this.state.selectedTab == 'Home'){
			return this.renderHome();
		}
		if (this.state.selectedTab == 'Favourites'){
			return this.renderFavourites();
		}
		if (this.state.selectedTab == 'Booking'){
			return this.renderBooking();
		}
		return this.renderSettings();
	}

	render() {
		return (
			<Container>
				<Header searchBar>
					<Item>
						<Icon name='ios-search'/>
						<Input placeholder='Search'/>
					</Item>
					<Button 
					style={{alignItems: 'center', justifyContent: 'center'}}
					transparent>
						<Image
							style={{ width: 30, height: 30 }}
							source={require('Vendor/imgs/addIcon.png')}
						/>
					</Button>
				</Header> 
					{this.renderContent()}
				<Footer>
					<FooterTab>
						<Button onPress={() => { this.setState({ selectedTab:'Home'});}}><Icon name='ios-search'/><Text style={{fontSize: 12}}>Home</Text></Button>
						<Button onPress={() => { this.setState({ selectedTab: 'Favourites' }); }}><Icon name='ios-search'/><Text style={{fontSize: 12}}>Favourites</Text></Button>
						<Button onPress={() => { this.setState({ selectedTab: 'Booking' }); }}><Icon name='ios-search'/><Text style={{fontSize: 12}}>Booking</Text></Button>
						<Button onPress={() => { this.setState({ selectedTab: 'Settings' }); }}><Icon name='ios-settings'/><Text style={{fontSize: 12}}>Settings</Text></Button>
					</FooterTab>
				</Footer>
			</Container>
	
		);
	}
}

export default Home;
