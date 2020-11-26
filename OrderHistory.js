import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Alert,
    FlatList,
    Dimensions,
    ActivityIndicator,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
const GLOBAL = require('./Global');
const window = Dimensions.get('window');
import Button from 'react-native-button';

export default class OrderHistory extends Component {
    state = {
        results:[
            {
                'id': '1',
                'order_id': '#2ACBE10234',
                'name': 'Jack Sparrow',
                'amount': '15$',
                'status': 'Success'
            },
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            
            {
                'id': '2',
                'order_id': '#3CABE1214',
                'name': 'Maestro Rai',
                'amount': '20$',
                'status': 'Success'
            },            

        ],
    };

    componentDidMount() {

    }

    renderItem=({item, index}) => {
        var bdate = '26/11/20'

        return(

    <TouchableOpacity style={{marginTop:10,marginLeft:15,marginBottom:10,marginRight:15,}}
    onPress={()=>{} } activeOpacity={0.6}>
            <View style={{backgroundColor:'white',color :'white',flexDirection:'column' ,
             flex: 1 , height: 120,borderRadius :6,
            width : Dimensions.get('window').width-30, shadowColor: '#D3D3D3',
                shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.6,shadowRadius: 2, }}>

                    <View>

                    <Text style={{color:'black', fontSize:14,marginTop:8}}> Order ID : {item.order_id}</Text>
                    <Text style={{color:'black', fontSize:14,marginTop:8}}> Name : {item.name}</Text>
                        <Text style={{color:'black', fontSize:14,marginTop:8,}}> Amount : {item.amount}</Text>
                        <Text style={{color:'black', fontSize:14,marginTop:8}}> Booking Status : {item.status}</Text>
                    </View>

       <Button style={{fontSize:13,color:'white'}}
        onPress={() => {
            alert('Thanks you for your order')
        }}
        containerStyle={{overflow:'hidden',padding:7,height:30,borderRadius:5,justifyContent:'center',marginLeft:50, marginBottom:10, backgroundColor:'purple',position:'absolute', top:20, right:10 }}>
                Rate Order
        </Button>

        </View>
    </TouchableOpacity>
        );
    }



    render() {
        return (
            <SafeAreaView>
            <View style={styles.container}>

                <FlatList
                    data={this.state.results}
                    keyExtractor={(item, index) => index.toString() }
                    renderItem={this.renderItem}
                    extraData={this.state}
                />

            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor :'#f1f1f1',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})