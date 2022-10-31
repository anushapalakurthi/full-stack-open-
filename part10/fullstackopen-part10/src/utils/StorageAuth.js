import AsyncStorage from '@react-native-community/async-storage';
class AuthStorage 
{
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }
  async getAccessToken() {
    const tokenAccess = await AsyncStorage.getItem(`${this.namespace}:token`);
    return tokenAccess || '';
  }
  async setAccessToken(tokenAccess) {
    await AsyncStorage.setItem(`${this.namespace}:token`, tokenAccess);
  }
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}
export default AuthStorage;
