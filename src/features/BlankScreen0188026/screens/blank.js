import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.Image_9}
      />
      <Text style={styles.Text_11}>Sample text content</Text>
      <Button
        title="Press me!"
        style={styles.Button_13}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_9: { alignSelf: "center" },
  Text_11: { alignSelf: "center" },
  Button_13: { width: 200, alignSelf: "center", borderRadius: 20 }
})
