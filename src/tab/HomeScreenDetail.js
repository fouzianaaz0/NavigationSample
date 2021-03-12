import React , {Component} from 'react'
import { Text, View , SafeAreaView , Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../CustomHeader'

class HomeScreenDetail extends Component {
    render(){
        return(
            <SafeAreaView style = {{flex : 1}}>
              <CustomHeader title = "Home Detail " isHome = {true} navigation = {this.props.navigation}/>
              <View style = {styles.container}>
                <Text>Home Detail</Text>
              </View>
            </SafeAreaView>
          )
}
}
const styles = StyleSheet.create({
  container: {
    flex : 1 , 
    justifyContent : 'center' , 
    alignItems : 'center'
    },
}
)
export default HomeScreenDetail;