import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
          <Text>Touchable Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
