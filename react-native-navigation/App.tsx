import * as React from 'react';
import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: number;
    otherParam: string;
  }
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      >
        Go to Details
      </Button>

    </View>
  );
}

function DetailsScreen({ route }: any) {
  const navigation = useNavigation<NavigationProp>();

  /* 2. Get the param */
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        onPress={() => navigation.goBack()}
      >
        Go to back
      </Button>

      {/* 
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details... again using navigation stack
      </Button>
      <Button onPress={() => navigation.push('Details')}>
        Go to Details... again using push
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button> */}

    </View>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

