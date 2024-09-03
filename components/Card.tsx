import { Shadows } from "@/constants/shadows";
import { useColorsTheme } from "@/hooks/useColorsTheme";
import { View, ViewProps, ViewStyle } from "react-native";

type CardProps = ViewProps & {};

const Card = ({ style, ...rest }: CardProps) => {
  const colors = useColorsTheme();
  return (
    <View
      style={[style, styles, { backgroundColor: colors["background"] }]}
      {...rest}
    />
  );
};

const styles = {
  borderRadius: 8,
  ...Shadows.dp2,
} satisfies ViewStyle;

export default Card;
