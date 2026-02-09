import { View, Text, StyleSheet } from "react-native";

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Course & Section: BSIS 3A</Text>
      <Text>Name: Aljon Fernandez</Text>
      <Text>Age: 21</Text>

      <Text style={{ marginTop: 20, paddingBottom: 10, fontSize: 14, fontWeight: 'bold', color: 'blue' }}>
        three pet peeves in you class/ classmate
      </Text>
      <Text>1. They don’t clean their place.</Text>
      <Text>2. Classmates who interrupt while someone is speaking.</Text>
      <Text>3. Classmates who use their cellphones during discussions.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});
