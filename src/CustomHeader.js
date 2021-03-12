import React , {Component} from 'react'
import { Text, View , StyleSheet , Image, TouchableOpacity } from 'react-native';

class CustomHeader extends Component {
    render(){
        return  (
            <View style = {styles.container}>
             {
               isHome? 
              <View style = {{flex : 1 }}>
                <Image style={styles.Icon} source = {require('../img/menu.png')}></Image>
              </View>
            
              :
              <TouchableOpacity style = {styles.button}
              onPress = {() => this.props.navigation.goBack()}>
                <Text>Back</Text>
              </TouchableOpacity>
        
             }
              <View style = {styles.line}>
              <Text style = {{textAlign : 'center'}}>{title}</Text>
              </View>
              <View style = {{flex : 1}}></View>
            </View>
          )
}
}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row' ,
    justifyContent: 'center', 
    height : 50 
    },
    Icon : {
       width:40 , 
       height : 40 , 
       marginLeft : 5 
    },
    button :{
      alignItems : 'center' , 
      flexDirection : 'row' , 
      marginLeft : 10
    },
    line : {
      flex : 1.5 , 
      justifyContent : 'center', 
      marginLeft : 50
    }
}
)

export default CustomHeader;