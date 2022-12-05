import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Login = ({ navigation }) => {
    return (
    <View>
        <Text>Login Page</Text>
        <TouchableOpacity
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        >
            <Text>Touchable Button</Text>
        </TouchableOpacity>
    </View>
    );
};
export default Login;