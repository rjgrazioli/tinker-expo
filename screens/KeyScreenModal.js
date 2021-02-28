import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default KeyScreenModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.tabBarButtonContainer}>
        <TouchableHighlight style={styles.tabBarButton} onPress={() => {setModalVisible(true)}}>
          <MaterialCommunityIcons name="lock-open-outline" size={32} color="#ffffff" />
        </TouchableHighlight>
      </View>
      <Modal
        backdropOpacity={0.3}
        isVisible={modalVisible}
        animationInTiming={150}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}>
        <View style={styles.modalBody}>
          <View style={styles.modalTab}></View>
          <Text style={styles.modalTitle}>Hi 👋!</Text>
          <Text>Hello from Overlay!</Text>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalBody: {
    position: 'relative',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 400,
    padding: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    backgroundColor: 'white',
  },
  modalTab: {
    position: 'absolute',
    top: -16,
    left: '50%',
    height: 6,
    width: 40,
    borderRadius: 3,
    backgroundColor: "#D8D8D8",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  tabBarButtonContainer: {
    paddingBottom: 20,
  },
	tabBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
    width: 68,
    backgroundColor: '#000',
    borderRadius: 34,
  },
});