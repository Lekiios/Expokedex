import Card from "@/components/Card";
import PText from "@/components/PText";
import { useColorsTheme } from "@/hooks/useColorsTheme";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View, ViewStyle } from "react-native";

type PokemonCardProps = {
  style?: ViewStyle;
  id: number;
  name: string;
};

const PokemonCard = ({ style, id, name }: PokemonCardProps) => {
  const colors = useColorsTheme();

  return (
    <Link asChild href={{ pathname: "/pokemon/[id]", params: { id: id } }}>
      <Pressable
        style={style}
        android_ripple={{ color: colors.background, foreground: true }}
      >
        <Card style={styles.card}>
          <PText variant={"caption"} color={"medium"} style={styles.id}>
            #{id.toString().padStart(3, "0")}
          </PText>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }}
            height={72}
            width={72}
          />
          <PText variant={"body3"} color={"dark"}>
            {name}
          </PText>
          <View
            style={[styles.ground, { backgroundColor: colors.background }]}
          />
        </Card>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 4,
  },
  id: {
    alignSelf: "flex-end",
  },
  ground: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    height: 44,
    zIndex: -1,
    borderRadius: 8,
  },
});

export default PokemonCard;
