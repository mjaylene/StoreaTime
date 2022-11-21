import { Asset } from "expo-asset";

// Credit: https://stackoverflow.com/a/57578468
export default async function loadBackgroundImageAsync() {
    await Promise.all([
      Asset.loadAsync([
        require('../assets/background.png')
      ]),
    ]);
  }

