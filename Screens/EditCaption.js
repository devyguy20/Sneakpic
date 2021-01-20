import React , {Component} from 'react';
import {
  Platform,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { DragTextEditor } from 'react-native-drag-text-editor';
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native-gesture-handler';
import ColorPicker from '../Components/ColorPicker';
import { useNunito, Nunito } from '../Util/Nunito';
import {oldColor} from '../Components/ColorPicker';
const WINDOW = Dimensions.get('window');
const BACKGROUND="https://i.ytimg.com/vi/LHF3VhLR3Ak/maxresdefault.jpg";
const TEXT ="."
const FONTDEF = Nunito.NunitoSans_800ExtraBold;
const BLACK="#000";
const WHITE="#FFF";
const COLORS=[oldColor];
const LEFT="left";
const RIGHT="right";
const CENTER="center";
const ALIGNS=[
  {name:0,icon:require("../assets/align-left.png")},
  {name:1,icon:require("../assets/align-center.png")},
  {name:2,icon:require("../assets/align-right.png")} 
];
const PROCESSBUTTON=[
  {icon:require('../assets/fontsize.png'),name:"Change Size",id:1},
  {icon:require('../assets/divider.png'),name:"Letter Spacing",id:2},
  {icon:require('../assets/split-vertical.png'),name:"Line Height",id:3},
  {icon:require('../assets/align-center.png'),name:"Change Align",id:4},
];
export default class EditCaption extends Component{
  constructor(props) {
    super(props);
  }; 
componentDidMount(){
  this.addText()
}
 state={
  textID:0,
  sizeOfText:0,
  arrayTextData: [],
  defFont:FONTDEF,
  lineHegOfText:0,
  textInAction:0,
  sizeTracker:15,
  letterSpcTracker:0,
  lineHegTracker:0,
  letterSpcOfText:0,
  pickedProcess:0,
 }

 processPicker=()=> {  
  switch(this.state.pickedProcess) {
    case 1:
      return (  
        <SafeAreaView style={styles.parentOfSlide}>
          <Slider
            value={this.state.sizeOfText} 
            onValueChange={sizeOfText => {
              this.fontSizing(sizeOfText);
            }} 
            style={styles.slide}
            minimumValue={0}
            maximumValue={40}
            minimumTrackTintColor={WHITE}
            maximumTrackTintColor={WHITE}
            thumbTintColor={WHITE}
          />   
        </SafeAreaView>
        );
    case 2:
      return (  
        <SafeAreaView style={styles.parentOfSlide}>
          <Slider
           value={this.state.letterSpcOfText} 
           onValueChange={letters => {
             this.setLetterSpacing(letters);
           }} 
           style={styles.slide}
           minimumValue={0}
           maximumValue={10}
           minimumTrackTintColor={WHITE}
           maximumTrackTintColor={WHITE}
           thumbTintColor={WHITE}
          />  
        </SafeAreaView>
            );
    case 3:
      return (  
        <SafeAreaView style={styles.parentOfSlide}>
          <Slider
           value={this.state.lineHegOfText} 
           onValueChange={heg => {
             this.setLineHeight(heg);
           }} 
           style={styles.slide}
           minimumValue={0}
           maximumValue={20}
           minimumTrackTintColor={WHITE}
           maximumTrackTintColor={WHITE}
           thumbTintColor={WHITE}
            /> 
        </SafeAreaView>
       );
    case 4:
       return ALIGNS.map((aligns,index) => {
        return (  
          <TouchableOpacity key={index} 
            onPress={()=>this.alignPicker(aligns.name)} 
              style={{backgroundColor:WHITE},[styles.touch]}>
          <Image style={styles.touchimage} source={aligns.icon}/>
        </TouchableOpacity>
        );
    });
    case 5:
      return COLORS.map((oldColor) => {
        return (  
          <ColorPicker/>
              );
            });
     
  default:
    return null;
         }
    }   
        fontSizing(sizeValue){ //fontsave
          const index=this.state.textInAction;
          const markers = [...this.state.arrayTextData];
          markers[index].defFontSize = sizeValue;
          markers[index].defLineHeight = sizeValue;
          this.setState({
             arrayTextData: markers,
              lineHegOfText:sizeValue/2
            });
        }
        alignPicker=(alignValue)=>{
          if(alignValue === 0){
            const index=this.state.textInAction;
            const markers = [...this.state.arrayTextData];
            markers[index].defAlign = LEFT;
            this.setState({ arrayTextData: markers });
          }
          else if(alignValue === 1){
            const index=this.state.textInAction;
            const markers = [...this.state.arrayTextData];
            markers[index].defAlign = CENTER;
            this.setState({ arrayTextData: markers });
          } 
          else if(alignValue === 2){
            const index=this.state.textInAction;
            const markers = [...this.state.arrayTextData];
            markers[index].defAlign = RIGHT;
            this.setState({ arrayTextData: markers });
          }
        }
     setLineHeight(valueofLine){ //fontsave
      const index=this.state.textInAction;
      const markers = [...this.state.arrayTextData];
      markers[index].defLineHeight = this.state.sizeOfText + valueofLine;
      this.setState({ arrayTextData: markers,lineHegTracker:this.state.sizeOfText + valueofLine});
    }  

    setLetterSpacing(valueofLetter){ //fontsave
      const index=this.state.textInAction;
      const markers = [...this.state.arrayTextData];
      markers[index].defLetterSpacing = valueofLetter;
      this.setState({ arrayTextData: markers ,letterSpcTracker:valueofLetter});
    }

addText(){ //text ekle array[]
 this.setState({textID:this.state.textID+1})
   let DEFS ={ 
     defTextID:this.state.textID,
     defTextValue:this.state.Lorem, 
     defFontFamily:Nunito.NunitoSans_800ExtraBold,
     fontFamily:Nunito.NunitoSans_800ExtraBold,
     defAlign:'center',
     defLetterSpacing:0,
     defColor:'#ffffff',
     defLineHeight:this.state.sizeOfText,
     defFontSize:40
    }
    this.setState({
       arrayTextData: [...this.state.arrayTextData, DEFS]
     });
   } 
   removeText(c){ //kaldırılan text
    const filtered = [...this.state.arrayTextData].filter(x => x.defTextID !== c)
      this.setState({
        arrayTextData:filtered,
          textID:this.state.arrayTextData.length,   
      });
  }
   setColorToText=(colorofArray)=>{
    const index=this.state.textInAction;
    const markers = [...this.state.arrayTextData];
    markers[index].defColor = colorofArray;
    this.setState({ arrayTextData: markers });
  }
  
   processButtons=()=>{
    return PROCESSBUTTON.map((buttons,index) => {
      return(
      <TouchableOpacity 
       key={index}
         onPress={()=>buttons.id==0?this.addText():this.setState({pickedProcess:buttons.id})} 
          style={styles.touch}>
        <Image 
          style={styles.touchimage} 
            source={buttons.icon}/>
        </TouchableOpacity>
        )
      });
    }
  render(){
    let ADDED_TEXTS = this.state.arrayTextData.map((ID, index) => {
     return (
          <DragTextEditor 
          key={index}
          minWidth={280}
          minHeight={100}
          w={200}
          h={200}
          x={WINDOW.width/8}
          y={WINDOW.height/3}
          FontColor={ID.defColor}
          LineHeight={ID.defLineHeight}
          TextAlign={ID.defAlign}
          TopRightAction={console.log('menashe')}
          LetterSpacing={ID.defLetterSpacing}
          FontSize={ID.defFontSize}
          TopRightAction={()=>this.removeText(ID.defTextID)}
          centerPress={()=>this.setState({textInAction:ID.defTextID})} 
          isDraggable={true}
          isResizable={true}
          onDragStart={()=>console.log("-Drag Started")}
          onDragEnd={()=>console.log("- Drag ended")}
          onDrag={()=>console.log("- Dragging...")}
          onResizeStart={()=>console.log("- Resize Started")}
          onResize={()=>console.log("- Resizing...")}
          onResizeEnd={()=>console.log("- Resize Ended")}
        
          />
        )
      });
      
   return(
  <SafeAreaView style={styles.parent}>
   <Image style={styles.background} source={{uri:BACKGROUND}}/>
   <ColorPicker/>
     <View style={styles.process}> 
      {this.processButtons()}
     </View>
     <View style={styles.process}> 
      {this.processPicker()}
     </View>
      {ADDED_TEXTS}
  </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  parent:{
  paddingTop:10,
  justifyContent:"flex-start",
    alignItems:"center",
  },
  touchimage:{
    tintColor:'white',
    width:30,
    height:30,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  colorTouch:{
    width:28,
    height:28,
    borderWidth:1.55,
    borderColor:'white',
    marginLeft:5,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
  },
  touch:{
    alignContent:'center',
    marginHorizontal:12,
    borderRadius:5,
    padding:5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'transparent',
  },
  image:{
    width:60,
    height:60,
    marginTop: Platform.OS=== 'ios' ? 30 : 0,
    marginLeft:-15,
   },
  background:{
    position:"absolute",
    resizeMode:"cover",
    width:WINDOW.width,
    height:WINDOW.height,
    flexDirection:"column",
  },
  process:{
    width:WINDOW.width-4,
    top:40,
    borderRadius:10,
    margin:2,
    elevation: Platform.OS=== 'ios' ? 15 : 0 ,
    zIndex: Platform.OS === 'ios' ? 50 : 0 ,
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"flex-end",
    backgroundColor:"transparent"
  },
  container:{
    width:WINDOW.width,
    height: Platform.OS=== 'ios' ? 95 : 70,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    marginBottom:2,
    elevation: Platform.OS=== 'ios' ? 10 : 0,
    zIndex: Platform.OS=== 'ios' ? 100 : 0 ,
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"center",
    backgroundColor:"rgba(255,255,255,255)"
  },
  text:{
    fontSize:30,
    marginTop: Platform.OS=== 'ios' ? 30 : 0,
    marginLeft:10,
    color:"#000",
    alignSelf:"center"
  },
  slide:{
    flex:6,
  },
  parentOfSlide:{
    width:320,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  }
})