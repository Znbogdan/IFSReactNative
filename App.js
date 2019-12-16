import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { GLView } from 'expo-gl';
import Expo2DContext from 'expo-2d-context';

const commonStyles = StyleSheet.create({
  full: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 23,
    alignSelf: 'stretch',
    textAlign: 'center',
  }, 
});
 
export default class App extends React.Component {
  constructor(props){
    super(props);
    
  }
  
  randgp(max) {return Math.floor(Math.random()*max)};
  value = null;
  
  _onGLContextCreate = (gl) => {
  //  var ctx = new Expo2DContext(gl);
   // canvas.width = 100;
   // canvas.height = 100;
    /* let mag = 40;
    let panX = 2;
    let panY = 1.25;
    ctx.scale(10,10)
    for(var x=0; x < 100; x++) {
      for(var y=0; y < 100; y++) {
        let m = this.mandelIter(x/mag - panX, y/mag - panY);
        ctx.fillStyle = (m === 0) ? '#000' : 'hsl(0,'+ m +'%, 100%)'; 
        ctx.fillRect(x, y, 1,1);            
      }
  } */
  
  var ctx = new Expo2DContext(gl);
  var x=0.,y=0.,xw=0.,yw=0.,r;
  var w = 500;
  var h = 500;
  var lim = 200000;
  ctx.scale(2,2);
  ctx.fillStyle="white"; ctx.fillRect(0,0,w,h);
   
  
  
  for(var i=0; i<lim; i++) {
    
    r=this.randgp(100);
    if (r<=1) {xw=0;yw=0.16*y;ctx.fillStyle="purple";}
    else if (r<86) {xw=0.85*x+0.04*y;yw=-0.04*x+0.85*y+1.6;ctx.fillStyle="green";}
    else if (r<93) {xw=0.2*x-0.26*y;yw=0.23*x+0.22*y+1.6;ctx.fillStyle="green";}
    else {xw=-0.15*x+0.28*y;yw=0.26*x+0.24*y+0.44;}
    x=xw;y=yw;  ctx.fillRect(x*80+260,-y*80+800,1,1);
    
    ctx.flush();
    
    
  }
  
  
}
  render() {
    return (  
      
      <View style={styles.container}>
        <View style={styles.toolbar}/>
        <GLView
            style={{  width: 500, height: 550, justifyContent: "center", paddingTop: 10 }}
             onContextCreate={this._onGLContextCreate}/>
            <Text style={{alignSelf: "center"}}> This is Barnsley fern </Text>
      </View>
      
    )
  }
}