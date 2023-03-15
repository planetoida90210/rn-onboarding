import { Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://www.pngfind.com/pngs/m/57-572728_image-naruto-png-naruto-shippuden-naruto-uzumaki-naruto.png",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Happy Discovering",
          subtitle: "Discover the app with latest features",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://www.pngfind.com/pngs/m/57-572728_image-naruto-png-naruto-shippuden-naruto-uzumaki-naruto.png",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "All You need in one place",
          subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://www.pngfind.com/pngs/m/57-572728_image-naruto-png-naruto-shippuden-naruto-uzumaki-naruto.png",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Check the new features",
          subtitle: "Lorem ipsum dolo sit amet",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
