mport {View, StyleSheet,Text,TouchableOpacity,Image,ScrollView} from 'react-native'
 
export default function App(){
  return(
 
    <View style = {styles.viewPrincipal}>
 
  <ScrollView
  contentContainerStyle = {styles.Scroll}
  >
   
   
 
<View style = {styles.Card}>
  <Text style = {styles.texto}> Apreciadores de Whimsicott Shiny </Text>
 
 <Image style = {styles.Imagem} source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jjCoIVyWjaWvH6u0ffq3El7ozzVTLdC3cA&s'}}>  
</Image>
 
 </View>
 
 <View style = {styles.Card} >
 
 <Image style = {styles.Imagem} source = {{uri:'https://ic.pics.livejournal.com/slothyshroom/28832649/80659/80659_original.jpg'}}>  
    </Image>
     <TouchableOpacity style = {styles.botao}>  Dar coração  </TouchableOpacity>
 </View>
 
 <View style = {styles.Card} >
  <Text style = {styles.texto}> Exemplo de  Apreciadores </Text>
   <Image style = {styles.Imagem} source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo6yBuwKYDLPR0-evUSikdHyZiynVSc-cCw&s'}}>  
    </Image>
   
 </View>
 </ScrollView>
</View>
 
  )
}
 
const styles = StyleSheet.create({
 
  viewPrincipal:{
    flex:1,
    backgroundColor:'#CCE5FF',
    alignItems:'center',
    borderRadius: '20',
 
  },
  texto:{
    fontSize:40,
    fontWeight:'bold',
    color:'#6600CC',
    boxShadow :' 20px 20px 10px 10px rgba(0, 0, 0, 0.2) '
  },
  botao:{
    width:'10%',
    height:30,
    backgroundColor:"white",
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:20,
    color: '#6600CC'
  },
 
  Imagem:{
  width:240,
  height:240,
  alignItems:'center',
  justifyContent:'center',
 
 
  },
  Card:{
  alignItems:'center',
   
  },
 Scroll:{
  alignItems:'center',
 
 
 }
 
})
