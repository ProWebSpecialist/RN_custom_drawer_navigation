import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
 
import { createDrawerNavigator } from 'react-navigation-drawer';
 
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
 
import Icon from 'react-native-vector-icons/FontAwesome';

class HamburgerIcon extends Component {
 
  toggleDrawer = () => {
 
    console.log(this.props.navigationProps);
 
    this.props.navigationProps.toggleDrawer();
 
  }
 
  render() {
 
    return (
 
      <View style={{ flexDirection: 'row' }}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
 
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
 
        </TouchableOpacity>
 
      </View>
 
    );
 
 
  }
}
 
class Custom_Side_Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuList: [], 
      is_loaded : false
    }
  }

  async componentWillMount() {
    const putMethod = {
      method: 'PUT', // Method itself
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      body: JSON.stringify({
        "userid": "485",
        "type":"APP"
        }) // We send data in JSON format
    }

    const url = "https://secret-basin-08997.herokuapp.com/temp/menu";
    
    await fetch(url, putMethod)
    .then(response => response.json())
    .then(data => this.setState({menuList: data, is_loaded: true}))
    .catch(err => console.log(err))
  }
 
  render() {

    const menus = this.state.menuList;

    if (this.state.is_loaded == false){
      return(
        <View style={{flex: 1, paddingTop: 150}}>
        </View>
      )
    }

    const drawers = menus.map(m => {
      const com = m.pname;

      if(m.pname == 'Profile') {
        return <><View style={{marginTop: 60}}>
                <Text style={{fontSize: 15}}>Settings</Text>
              </View>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('First') }}>
              <View style={{width: '100%', marginTop: 20, height: 55}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 30, color:'#000'}}>Profile Details</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 25, color:'#ddd', textAlign: 'right', marginTop: 5}}>></Text>
                  </View>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10}} />
              </View>
              </TouchableOpacity></>;
      }

      if(m.pname == "Security") {
        return <TouchableOpacity onPress={() => { this.props.navigation.navigate('Second') }}>
        <View style={{width: '100%', marginTop: 20, height: 55}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 30, color:'#000'}}>Security</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25, color:'#ddd', textAlign: 'right', marginTop: 5}}>></Text>
            </View>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10}} />
        </View>
        </TouchableOpacity>;
      }

      if(m.pname == "Logout") {
        return <><View style={{marginTop: 40}}> 
        <Text style={{fontSize: 15}}>Logout</Text>
      </View>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Third') }}>
      <View style={{width: '100%', marginTop: 20, height: 55}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon name="sign-out" size={30} color="#900" style={{marginTop: 5}} /><Text style={{marginLeft:10, fontSize: 30, color:'#000'}}>Log out</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 25, color:'#ddd', textAlign: 'right', marginTop: 5}}>></Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10}} />
      </View>
      </TouchableOpacity></>;
      }

    });
 
    return (
 
      <View style={styles.sideMenuContainer}>

        <View>
          <Text style={{fontSize: 40, color: '#000'}}>User</Text>
        </View>

        <View style={{alignItems:'center'}}>
          <View style={{borderRadius: 100}}>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
          style={styles.sideMenuProfileIcon} />
          </View>
          <View style={{alignContent: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>John Doe</Text>
          </View>
        </View>

        {drawers}
 
      </View>
    );
  }
}
 
 
class MainActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> This is Home screen </Text>
 
      </View>
    );
  }
}
 
class SecondActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> This is Profile screen </Text>
 
      </View>
    );
  }
}
 
class ThirdActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> This is Security screen </Text>
 
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: MainActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'MainActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});
 
 
const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: SecondActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'SecondActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});
 
 
const ThirdActivity_StackNavigator = createStackNavigator({
  Third: {
    screen: ThirdActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'ThirdActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});
 

const MyDrawerNavigator = createDrawerNavigator({
    MainStack: {
      screen: FirstActivity_StackNavigator
    },
   
    SecondStack: {
      screen: SecondActivity_StackNavigator
    },
   
    ThirdStack: {
      screen: ThirdActivity_StackNavigator
    }
  },
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });

export default App = createAppContainer(MyDrawerNavigator);
 
const styles = StyleSheet.create({
 
  MainContainer: {
 
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
 
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
 
  sideMenuProfileIcon:
  {
    width: 200,
    height: 200,
    borderRadius: 100
  },
 
  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 28, 
    height: 28, 
    marginRight: 10,
    marginLeft: 20
    
  },
 
  menuText:{
 
    fontSize: 15,
    color: '#222222',
    
  }
 
});