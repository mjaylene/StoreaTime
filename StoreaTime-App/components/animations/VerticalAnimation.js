// Credit for verticalAnimation function: https://itnext.io/change-react-native-screen-animation-direction-with-react-navigation-8cec0f66f22

export default verticalAnimation = {
    gestureDirection: 'vertical',
    headerShown: false,
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };