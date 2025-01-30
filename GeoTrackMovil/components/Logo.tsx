
import React from "react";
import { Image, ImageStyle } from "react-native";

interface LogoProps {
  style?: ImageStyle;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  return <Image source={require("../assets/images/logo_geotrack_best.png")} style={style} />;
};

export default Logo;
