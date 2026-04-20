// types.ts
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams } from '@react-navigation/native';

// Param list for the More stack navigator
export type MoreStackParamList = {
    Settings: { userId: string };
    Profile: undefined;
};

// Param list for the Root tab navigator
export type RootTabsParamList = {
    Home: undefined;
    More: NavigatorScreenParams<MoreStackParamList>;
};

// Screen props for each screen
export type SettingsScreenProps = NativeStackScreenProps<MoreStackParamList, 'Settings'>;
export type ProfileScreenProps = NativeStackScreenProps<MoreStackParamList, 'Profile'>;
export type HomeScreenProps = BottomTabScreenProps<RootTabsParamList, 'Home'>;

// Type for the navigation prop when navigating between tabs
export type RootTabsNavigationProp = BottomTabScreenProps<RootTabsParamList>['navigation'];