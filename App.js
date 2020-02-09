/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator
} from "react-navigation";

//Authentication Stack start
import IntroScreen from './components/AuthenticationStack/IntroScreen';
import LoginScreen from './components/AuthenticationStack/LoginScreen';
import OtpVerificationScreen from './components/AuthenticationStack/OtpVerificationScreen';
import OtpSuccessScreen from './components/AuthenticationStack/OtpSuccessScreen';
import UpdateEmailScreen from "./components/AuthenticationStack/UpdateEmailScreen";
import UpdateNameScreen from "./components/AuthenticationStack/UpdateNameScreen";
import UpdateDOBScreen from "./components/AuthenticationStack/UpdateDOBScreen";
import UpdateSexScreen from "./components/AuthenticationStack/UpdateSexScreen";
import UpdateIntrestedScreen from "./components/AuthenticationStack/UpdateIntrestedScreen";
import PhotoVerificationScreen from "./components/AuthenticationStack/PhotoVerificationScreen";
//Authentication stack end

import HomeScreen from "./components/HomeScreen";
import UserProfileScreen from "./components/UserProfileScreen";
import EditProfileScreen from "./components/EditProfileScreen";
import MessagesScreen from "./components/MessagesScreen";
import ExtendedHomeScreen from "./components/ExtendedHomeScreen";
import WhoLikesScreen from "./components/WhoLikesScreen";
import UserSettings from "./components/UserSettings";
import FiltersScreen from "./components/FiltersScreen";
import MessagesChatScreen from "./components/MessagesChatScreen";
import BuzzChatScreen from "./components/BuzzChatScreen";
import SubscriptionScreen from "./components/SubscriptionScreen";


export default createAppContainer(
    createSwitchNavigator({

        HomeScreen: HomeScreen,
        IntroScreen: IntroScreen,
        LoginScreen: LoginScreen,
        OtpVerificationScreen: OtpVerificationScreen,
        OtpSuccessScreen: OtpSuccessScreen,
        UpdateNameScreen: UpdateNameScreen,
        UpdateSexScreen: UpdateSexScreen,
        UpdateIntrestedScreen: UpdateIntrestedScreen,
        PhotoVerificationScreen: PhotoVerificationScreen,
        // HomeScreen: HomeScreen,
        UpdateDOBScreen: UpdateDOBScreen,
        UpdateEmailScreen: UpdateEmailScreen,
        MessagesScreen: MessagesScreen,
        WhoLikesScreen: WhoLikesScreen,
        ExtendedHomeScreen: ExtendedHomeScreen,
        UserSettings: UserSettings,
        EditProfileScreen: EditProfileScreen,
        UserProfileScreen: UserProfileScreen,
        FiltersScreen: FiltersScreen,
        MessagesChatScreen: MessagesChatScreen,
        BuzzChatScreen:BuzzChatScreen,
        SubscriptionScreen:SubscriptionScreen
    })
);
