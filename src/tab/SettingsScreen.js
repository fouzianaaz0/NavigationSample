import React , {Component} from 'react'
import { Text, View , SafeAreaView , Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../CustomHeader'

class SettingsScreen extends Component {
    render(){
        return (
            <SafeAreaView style = {{flex : 1}}>
              <CustomHeader title = "Setting"/>
            <View style={styles.container}>
              <Text>Settings!</Text>
              <TouchableOpacity style = {{ marginTop : 20}}
              onPress = {() => this.props.navigation.navigate('SettingsDetail')}>
                  <Text>Go Setting Detail</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
          );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center', 
     alignItems: 'center' 
    },
}
)
export default SettingsScreen;