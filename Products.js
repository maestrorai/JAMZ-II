import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,ActivityIndicator,StatusBar,Image,TouchableOpacity ,Alert,Container,Linking ,TextInput , Dimensions, SafeAreaView} from 'react-native';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height
import Button from 'react-native-button';
const window = Dimensions.get('window');
const GLOBAL = require('./Global');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Products extends Component {

    constructor(props){
        super(props)
        const { navigation } = this.props;
        this.state = {
            pdList:[
              {
                'id': '1',
                'price': '15', //here  of product
                'name': 'Travis Burger',
                'image': require('./assets/Burger.jpg')
              },
              {
                'id': '2',
                'price': '25',
                'name': 'Gotti Pizza', 
                'image': require('./assets/Pizza.jpg')
              },
              {
                'id': '1',
                'price': '20',
                'name': 'Tasty Kebab',
                'image': require('./assets/Kebab.jpeg')
              },
            ],
        }
    }

    _keyExtractor = (item, index) => item.productID;

    componentDidMount(){

    }

    addToCart=(item, index)=>{
        var arr = GLOBAL.cartItems
        GLOBAL.cartItems = [...arr, item]
        alert('Added to cart!')
    }

  _renderItem=({item, index}) => {
    return (
    <>
    <TouchableOpacity style={{width:wp('45%'), margin:7,height:hp('28%'),backgroundColor:'white',}}
    activeOpacity={0.99} onPress={()=> { console.log('')}}>
      <View style  = {{width:wp('45%'), height:hp('28%'),backgroundColor:'#f7f7f7',shadowColor: "#000",
          elevation:4, flexDirection:'column',alignItems:'center',borderRadius:5, 
      }}>
    <Image style={{width:wp(40), height:hp(15), resizeMode:'cover',marginTop:hp(1)}} source={item.image}/>
    <View style={{backgroundColor:'white', width:wp('45%'),  flexDirection:'column', marginTop:hp(2), borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
          <Text style={{fontSize:15, color:'#000000',width:wp('39%'),marginLeft:wp(3), marginTop:hp(1)}}
          numberOfLines={2}>
              {item.name}
          </Text>
          <View style={{width:wp('40%'), flexDirection:'row', justifyContent:'space-between',marginLeft:wp(3), }}>
         <Text style = {{fontSize:10, color:'#E60000',width:wp(27),marginTop:hp(1)}}>
              {item.price}
          </Text>
          <TouchableOpacity onPress={()=> this.addToCart(item, index)}>
          <View style={{backgroundColor:'#E60000', height:25, width:wp(11.5), borderRadius:6, justifyContent:'center'}}>
          <Text style = {{fontSize:9, color:'white', alignSelf:'center'}}>
          Add
          </Text>
          </View>
          </TouchableOpacity>
          </View>

      </View>
      </View>
    </TouchableOpacity>
    </>
    )
}

    render() {
        return (
        <SafeAreaView>

                    <FlatList style= {{flexGrow:0,marginVertical:hp(1.5), marginHorizontal:wp(1.5)}}
                              data={this.state.pdList}
                              numColumns={2}
                              keyExtractor = { (item, index) => index.toString() }
                              renderItem={this._renderItem}
                    />
        </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
});

