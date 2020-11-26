import React, {Component} from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from './MapScreen'
import HelpScreen from './HelpScreen'
import OrderHistory from './OrderHistory'
import AccountScreen from './AccountScreen'
import Products from './Products'
import Cart from './Cart'

const Tab = createBottomTabNavigator();     

function Tabs() {
  return (
      <Tab.Navigator
      shifting={true}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;
            if (route.name === 'Explore') {

              if(focused){
    //active image
              iconName=require('./assets/search.png')
              }else{
//inactive image
                iconName= require('./assets/search1.png')                
              }

            } else if(route.name === 'My Account'){

                if(focused){
                    //active image 
                              iconName=require('./assets/user.png')
                              }else{
                //inactive image
                                iconName= require('./assets/profile.png')                
            }
                
            } else if(route.name === 'Order History'){

              if(focused){
                  //active image 
                            iconName=require('./assets/history1.png')
                            }else{
              //inactive image
                              iconName= require('./assets/history.png')                
          }
              
          } else if(route.name === 'Cart'){

            if(focused){
                //active image 
                          iconName=require('./assets/shopping-cart1.png')
                          }else{
            //inactive image
                            iconName= require('./assets/shopping-cart.png')                
        }
            
        } else if(route.name === 'My Cart'){

          if(focused){
              //active image 
                        iconName=require('./assets/shopping-cart1.png')
                        }else{
          //inactive image
                          iconName= require('./assets/shopping-cart.png')                
      }
          
      } 

            return(
            <Image
                source={iconName}
                style={{height:20, width:20, resizeMode:'contain',alignSelf:'center'}}
                />
            )},
        })}
        tabBarOptions={{
          height: 80,
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
          activeBackgroundColor :'white',
          inactiveBackgroundColor :'white',
        }}
      >
        <Tab.Screen name="Explore" component={Products} />
        <Tab.Screen name="Order History" component={OrderHistory}/>
        <Tab.Screen name="My Cart" component={Cart}/>
        <Tab.Screen name="My Account" component={AccountScreen}/>
        

      </Tab.Navigator>

  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Tab" component={Tabs} />
        <Stack.Screen name="MapScreen" component={MapScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;