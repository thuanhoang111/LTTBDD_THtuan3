import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
function ForgotPassword() {
   return (
      <View style={styles.container}>
         <View style={styles.viewItem}>
            <Image source={require('../image/lock.png')} />
         </View>
         <View style={styles.viewItem}>
            <Text style={styles.header}>FORGET PASSWORD</Text>
            <Text style={styles.text}>Provide your account’s email for which you want to reset your password</Text>
         </View>
         <View style={styles.textField}>
            <TextInput placeholder="Email" style={styles.textInput}>
               <Image source={require('../image/lock.png')} style={styles.logo}></Image>
            </TextInput>
            <TouchableOpacity style={styles.btn}>
               <Text style={{ textAlign: 'center' }}>NEXT</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   header: {
      fontSize: 25,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '700',
   },
   textField: {
      flex: 1,
      paddingTop: 50,
      width: '100%',
   },
   text: {
      paddingTop: 50,
      textAlign: 'center',
      fontWeight: '600',
   },
   btn: {
      paddingTop: 15,
      borderRadius: 50,
      height: 50,
      width: '100%',
      backgroundColor: '#f2dd1b',
   },
   viewItem: {
      paddingTop: 50,
   },
   logo: {
      width: 50,
      height: 50,
      borderColor: '#000',

      // objectFit: 'cover',
   },
   textInput: {
      width: '100%',
      height: 60,
      // fontSize:46
      borderWidth: 2,
      borderColor: '#000',
      paddingBottom: 25,
      marginBottom: 30,
   },
});

export default ForgotPassword;
