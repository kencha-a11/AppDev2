import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import PercentageDimensionsBasics from './PercentageDimesionsBasics';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <LotsOfStyles />
    // <FixedDimensionsBasics />
    // <FlexDimensionsBasics />
    <PercentageDimensionsBasics />
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
