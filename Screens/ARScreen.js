import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator
} from 'react-viro';
const  HelloWorldSceneAR = () => {
  const [text, setText] = useState("initializing");
    return (
      <ViroARScene onTrackingUpdated={onInitialized} >
        <ViroText text={text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
      </ViroARScene>
    );z
  function onInitialized(text, reason) {
    if (text == ViroConstants.TRACKING_NORMAL) {
      setText("HellooWorld");
    } else if (text == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

const ARScreen = () => {
			return(
				<ViroARSceneNavigator
					autofocus={true}
					initialScene={{
						scene: HelloWorldSceneAR,
					}}
					style={{flex: 1}}
				/>
			);
};
export default ARScreen;