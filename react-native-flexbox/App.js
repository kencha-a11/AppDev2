import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './src/Flex';
import FlexDirectionBasics from "./src/FlexDirectionBasics";
import DirectionLayout from "./src/DirectionLayout";
import JustifyContentBasics from "./src/JustifyContentBasics";
import AlignItemsLayout from "./src/AlignItemsLayout";
import AlignSelfLayout from './src/AlignSelfLayout';
import AlignContentLayout from './src/AlignContentLayout';
import FlexWrapLayout from './src/FlexWrapLayout';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Flex />
    // <FlexDirectionBasics />
    // <DirectionLayout />
    // <JustifyContentBasics />
    // <AlignItemsLayout />
    // <AlignSelfLayout/>
    // <AlignContentLayout/>
    <FlexWrapLayout/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
