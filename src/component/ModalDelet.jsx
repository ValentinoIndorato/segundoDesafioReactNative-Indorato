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
import {  useDispatch } from 'react-redux'

import {  onHandlerDelete } from "../features/Slice";


function ModalDelete({ modalVisible, setModalVisible, item,modalType,index }) {
  const dispatch=useDispatch()
  const {title, description, category,  id}=item

  return (
    <>
      <Modal visible={modalVisible} transparent={true} style={styles.modal}>
        <View style={styles.conteinerItem}>
        <TouchableOpacity onPress={() => setModalVisible(false)}><Text >adsasdasad </Text></TouchableOpacity>

          <Text style={styles.tex}>{title}</Text>
          <Button
            title={modalType===true?"Editar" : "Borrar"}
            color="#747bff"
            onPress={() => {setModalVisible(false),modalType===false&& dispatch(onHandlerDelete())}}
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
    backgroundColor:"#2135479f",
    alignItems: "center",
    justifyContent: "center",
  },
  tex: {
    color: "#fff",
    fontSize: 25,
    // fontWeight: 600, me tira error preguntar porque
  },
});
export default ModalDelete;
