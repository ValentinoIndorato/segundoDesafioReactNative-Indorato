import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity
} from "react-native";
import { useDispatch } from 'react-redux'

import { onHandlerEdit } from "../features/Slice";
import { useState } from "react";
import { useUpdateOneTodoMutation } from "../app/services/listToDoServices";


function ModalEdit({ modalVisible, setModalVisible, item, modalType, index }) {
  const dispatch = useDispatch()
  const [upDateOneToDo] = useUpdateOneTodoMutation()
  const {title, description, category,  id}=item
  const [editText, setEditText] = useState("");

  return (
    <>
      <Modal visible={modalVisible} transparent={true} style={styles.modal}>
        <View style={styles.conteinerItem}>
        <TouchableOpacity onPress={() => setModalVisible(false)}><Text >adsad </Text></TouchableOpacity>
          <Text style={styles.tex}>{title} </Text>
          <TextInput
            placeholder="editar"
            value={editText === "" ? "title" : editText}
            onChangeText={(e) => {
              setEditText(e);
            }}
            style={styles.input}
            focusable
          />

          <Button style={styles.button}
            title={modalType === true ? "Editar" : "Borrar"}
            color="#747bff"
            onPress={() => { setModalVisible(false), modalType === true && dispatch(onHandlerEdit({ text: editText === "" ? title : editText, index: index })), upDateOneToDo({ editText }) }}
          />

        </View>

      </Modal>
    </>
  );
}


const styles = StyleSheet.create({
  modal: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  conteinerItem: {
    flex: 1,
    backgroundColor: "#2135479f",
    alignItems: "center",
    justifyContent: "center",
  },
  tex: {
    color: "#fff",
    fontSize: 25,
    // fontWeight: 600, me tira error preguntar porque
  },
  input: {
    color: "red",
    marginBottom: 50
  },
  button: {


  }
});
export default ModalEdit;