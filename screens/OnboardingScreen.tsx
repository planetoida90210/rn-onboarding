import { Text, SafeAreaView, Image, View } from "react-native";
import React, { ButtonHTMLAttributes } from "react";
import Onboarding, { SkipButtonProps } from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface DotProps {
  selected: boolean;
}

const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const DotComponent = ({ selected }: DotProps) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-orange-400" : ""
        }`}
      >
        <View className={`w-2 h-2 ${selected ? "bg-orange-400" : "bg-orange-200"} rounded-full`}></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
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
