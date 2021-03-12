import React , {Component} from 'react'
import { Text, View , SafeAreaView , StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../CustomHeader'

class HomeScreen extends Component {
    render(){
        return(
            <SafeAreaView style = {{flex : 1}}>
              <CustomHeader title = "Home" isHome = {true} />
              <View style = {styles.container}>
                <Text>Home</Text>
                <TouchableOpacity style = {{ marginTop : 20}}
                onPress = {() => this.props.navigation.navigate('HomeDetail')}>
                  <Text>Go Home Detail</Text>
                  
                </TouchableOpacity>
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
export default HomeScreen;