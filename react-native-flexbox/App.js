import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './Flex';
import FlexDirectionBasics from './FlexDirectionBasics';
import DirectionLayout from './DirectionLayout';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsLayout from './AlignItemsLayout';

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
    <AlignItemsLayout />
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
