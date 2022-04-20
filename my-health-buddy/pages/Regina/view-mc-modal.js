import React, {useState} from "react";
import { Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ViewMCModal = (props) => {

  const [onPressColourClose, setOnPressColourClose] = useState(styles.buttonPressOut);
  const [onPressColourShare, setOnPressColourShare] = useState(styles.buttonPressOut);

  let [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../../src/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../../src/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalContent}>MC ID: {props.mcId}</Text>
            <Text style={styles.modalContent}>Clinic: {props.clinic}</Text>
            <Text style={styles.modalContent}>Visited: {props.mcStart}</Text>
            <Text style={styles.modalContent}>Start Date: {props.mcStart}</Text>
            <Text style={styles.modalContent}>End Date: {props.mcEnd}</Text>
            <Text style={styles.modalContent}>Duration: {props.mcDuration}</Text>

            <Pressable
              style={[styles.button, onPressColourClose]}
              onPress={() => {
                props.setModalVisible(!props.modalVisible);
                props.setSelectedId(null);
                console.log('Modal has been closed.')}
              }
              onPressIn={() => {
                setOnPressColourClose(styles.buttonPressIn);
              }}
              onPressOut={() => {
                setOnPressColourClose(styles.buttonPressOut);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '80%',
    backgroundColor: 'black',
    opacity: 0.8
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginTop: 0.05*windowHeight,
    height: 0.6*windowHeight,
    width: 0.8*windowWidth,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 0.07*windowHeight,
    width: 0.3*windowWidth,
    borderRadius: 25,
    padding: 10,
    elevation: 2
  },
  buttonPressIn: {
    backgroundColor: "aquamarine",
  },
  buttonPressOut: {
    backgroundColor: "#33C3B9",
  },
  textStyle: {
    fontFamily: 'OpenSans-Regular',
    color: "white",
    textAlign: "center"
  },
  modalContent: {
    fontSize: 13,
    fontFamily: 'OpenSans-Bold',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default ViewMCModal;