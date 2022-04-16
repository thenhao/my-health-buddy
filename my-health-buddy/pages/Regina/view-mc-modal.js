import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { DataTable } from "react-native-paper";

const ViewMCModal = (props) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>MC ID</DataTable.Title>
                <DataTable.Title>Clinic</DataTable.Title>
                <DataTable.Title>Start Date</DataTable.Title>
                <DataTable.Title>End Date</DataTable.Title>
                <DataTable.Title>Duration</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>{props.mcId}</DataTable.Cell>
                <DataTable.Cell>{props.clinic}</DataTable.Cell>
                <DataTable.Cell>{props.mcStart}</DataTable.Cell>
                <DataTable.Cell>{props.mcEnd}</DataTable.Cell>
                <DataTable.Cell>{props.mcDuration}</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}
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
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ViewMCModal;