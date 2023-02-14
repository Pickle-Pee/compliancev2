import * as Keychain from 'react-native-keychain';

async function saveCredentials(username, password) {
  await Keychain.setInternetCredentials(
    'your-app-name',
    username,
    password
  );
}

async function getCredentials() {
  return await Keychain.getInternetCredentials('your-app-name');
}
