import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HealthArticleSolo = (props) => {
    const params = props.route.params;
    return (
        <View style={styles.container}>
            <Text>This is a solo Article Screen</Text>
            <Text>{params.body}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HealthArticleSolo;