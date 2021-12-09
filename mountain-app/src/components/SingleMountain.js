import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

const screenSize = Dimensions.get('screen')

const SingleMountain = ({route}) => {
    return (
        <ScrollView style={styles.mainview}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textbox_hillname}>{route.params.mountain.hillname}</Text>
                </View>
                <View>
                    <TouchableOpacity disabled={true}>
                        <MapView style={styles.map} initialRegion={{
                            latitude: route.params.mountain.latitude,
                            longitude: route.params.mountain.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} mapType={'satellite'} 
                        >
                        <MapView.Marker
                            coordinate = {{
                                latitude: route.params.mountain.latitude,
                                longitude: route.params.mountain.longitude
                            }}
                            title={"title"}
                            description={"description"}
                        />
                        </MapView>
                    </TouchableOpacity>
                </View>
                <View style={styles.description}>
                    <Text style={styles.textbox_description}>{route.params.mountain.description1}</Text>
                    <Text style={styles.textbox_description}>{route.params.mountain.description2}</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoLeft}>
                        <Text style={styles.textbox_info}>Height in feet: </Text>
                        <Text style={styles.textbox_info}>Height in metres: </Text>
                        <Text style={styles.textbox_info}>Longitude:</Text>
                        <Text style={styles.textbox_info}>Latitude: </Text>
                    </View>
                    <View style={styles.infoRight}>
                        <Text style={styles.textbox_info}>{route.params.mountain.feet} </Text>
                        <Text style={styles.textbox_info}>{route.params.mountain.metres}</Text>
                        <Text style={styles.textbox_info}>{route.params.mountain.longitude}</Text>
                        <Text style={styles.textbox_info}>{route.params.mountain.latitude}</Text>
                    </View>
                </View>
                <View style={styles.classification}>
                    <Text>{route.params.mountain.classification}</Text> 
                </View>
                <View style={styles.weather}>

                </View>
                <View style={styles.img}>
                    <Image
                        source={{ uri: route.params.mountain.img_hres_url }}
                        style={styles.image}
                    ></Image>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainview: {
        backgroundColor: 0x2E2D4DFF,
    },
    container: {
        backgroundColor: 0x2B3A67FF,
        alignItems: "center",
        marginTop: 10,
        padding: 15,
        marginBottom: 3,
        marginLeft: 6,
        marginRight: 6,
        borderRadius: 25,
        borderColor: 0xAAADC4FF,
        borderWidth: 1
    },
    image: {
        borderRadius: 14,
        width: screenSize.width * 0.9,
        height: screenSize.height * 0.25
      },
    description: {
        width: screenSize.width * 0.9,
    },
    map: {
        borderColor: 0x000000ff,
        borderWidth: 1,
        borderRadius: 14,
        width: screenSize.width * 0.95,
        height: screenSize.height * 0.25,
    },
    textbox_hillname: {
        color: 0xFFFFFFFF,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textbox_description: {
        textAlign: "left",
        color: 0xFFFFFFFF,
        fontSize: 17,
        marginTop: 10
    },
    info: {
        width: screenSize.width * 0.9,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    infoLeft: {
        flex: 1,
    },
    infoRight: {
        flex: 1,
        textAlign: "left",
    },
    textbox_info: {
        color: 0xFFFFFFFF,
        fontSize: 18,
        marginTop: 10
    },
    classification: {
        marginTop: 20,
        marginBottom: 20
    }
})

export default SingleMountain;