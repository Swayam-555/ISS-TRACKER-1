import * as React from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require("../assets/bg_image.png")} style={{ resizeMode: "cover", flex: 1 }}>
                    <View>
                        <Text style={{ textAlign: 'center', color: "white", fontWeight: 'bold', fontSize: 180 }}>
                            ISS TRACKER APP
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('ISSLocation')}>
                        <Image source={require("../assets/iss_icon.png")} style={styles.icon} />


                        <Text style={styles.text}>
                            ISS LOCATION
                        </Text>
                        <Text style={styles.info}>
                            {"know more--->"}
                        </Text>
                        <Text style={styles.number}>
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Meteor')} >
                        <Image source={require("../assets/meteor_icon.png")} style={styles.icon} />


                        <Text style={styles.text}>
                            METEOR
                        </Text>
                        <Text style={styles.info}>
                            {"know more--->"}
                        </Text>
                        <Text style={styles.number}>
                            2
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "white",
        flex: 0.25,
        marginLeft: 700,
        marginTop: 100,
        marginRight: 700,
        borderRadius: 100,
        paddingLeft: 500,


    },
    text: {
        fontSize: 100,
        fontWeight: 'bold',
        fontStyle: "italic",


    },
    info: {
        fontSize: 50,
        fontStyle: "italic",


        color: 'red',
        fontWeight: 80
    },
    number: {
        fontSize: 400,
        position: 'absolute',
        right: 150,
        color: 'rgba(183,183,183,0.5)'
    },
    icon: {
        width: 400,
        height: 400,
        postion: 'relative',
        right: -3500,
        top: -120,

    }
})