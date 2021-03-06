import React from 'react';
import {Text,View,StyleSheet,Image, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductItem = props => {
    return(
        <View style={styles.product}>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                <Button title='View Details' onPress={props.onViewDetail}/>
                <Button title='To Cart' onPress={props.onAddToCart}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width: 0, height: 2},
        shadowRadius:8,
        borderRadius:10,
        backgroundColor:'white',
        height: 300,
        margin:20,
    },
    image: {
        width: '100%',
        height: '60%',
    },
    details:{
        alignItems:'center',
        height:'15%',
        padding:10
    },
    title:{
        fontSize: 18,
        marginVertical: 4,
    },
    price:{
        color: '#888',
        fontSize:14,
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'25%',
        paddingHorizontal:20
    }
});

export default ProductItem;