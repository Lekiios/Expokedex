import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";

export const useColorTheme = () => {
  const scheme = useColorScheme() ?? "light";
  return Colors[scheme];
};
