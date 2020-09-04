import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity , Animated} from 'react-native'

const AnimatedBallExample = () => {
    /**
     * new Animated.Value(0) 
     * the above object will reinstantiated everytime when component rerender,
     * on that time we will loss our animation older value
     */
    /**
     * to keep animation value unchange when object is rerender,
     * we have two object 
     * 1. useRef - will return same object
     * 2. useState
     */

     /**
      * in general js, if we move some object means we use position property,
      * but if we do it like in RN, it will so much computation,
      * to avoid that use RN Animated
      */
    const leftValue = useState(new Animated.Value(-50))[0];
    const fadeAnim = useRef(new Animated.Value(4)).current;

    console.log('value', leftValue);
    console.log('fadeAnim', fadeAnim);

    function moveBall() {
        console.log('moveBall', fadeAnim);
        Animated.timing(leftValue, {
            toValue: 100,
            duration: 1000,
            useNativeDriver:false
        }).start()
    }

    function goLeft() {
        console.log('goLeft', leftValue);
        Animated.timing(leftValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver:false
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.ball, {marginLeft:leftValue}]} /> 
            <TouchableOpacity onPress={moveBall}>
                <Text>Go right</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={goLeft}>
                <Text>Go left</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default AnimatedBallExample

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
		justifyContent: 'center',
    },
    ball: {
        width: 100,
        height:100,
        borderRadius: 100/2,
        backgroundColor: 'gold'
    }
})
