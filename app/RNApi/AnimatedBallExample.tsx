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
    const value = useState(new Animated.Value(2))[0];
    const fadeAnim = useRef(new Animated.Value(4)).current;

    console.log('value', value);
    console.log('fadeAnim', fadeAnim);

    return (
        <View>
            <View style={styles.ball} /> 
            <TouchableOpacity>
            <Text>Click me</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default AnimatedBallExample

const styles = StyleSheet.create({
    ball: {
        width: 100,
        height:100,
        borderRadius: 100/2,
        backgroundColor: 'gold'
    }
})
