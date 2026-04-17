import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
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

function HomeScreen({ route }: any) {
  const navigation = useNavigation();

  // Use an effect to monitor the update to params
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      alert('New post: ' + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('CreatePost')}>
        Create post
      </Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
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
        onPress={
          () =>
            navigation.setParams({
              itemId: Math.floor(Math.random() * 100),
              otherParam: 'random',
            })
        }
      >
        Go to Details... again
      </Button>


    </View>
  );
}

function CreatePostScreen({ route }: any) {
  const navigation = useNavigation();
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo('Home', { post: postText });
        }}
      >
        Done
      </Button>
    </>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    CreatePost: CreatePostScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}