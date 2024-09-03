import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";

export const useColorsTheme = () => {
  const scheme = useColorScheme() ?? "light";
  return Colors[scheme];
};
