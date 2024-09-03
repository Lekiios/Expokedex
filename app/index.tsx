import Card from "@/components/Card";
import PText from "@/components/PText";
import { useColorsTheme } from "@/hooks/useColorsTheme";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const colors = useColorsTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors["primary"] }]}
    >
      <View style={styles.title}>
        <Image
          source={require("@/assets/images/Pokeball.png")}
          height={24}
          width={24}
        />
        <PText variant={"headline"} color={"white"}>
          Pokédex
        </PText>
      </View>
      <Card style={styles.body}></Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 16,
  },
  body: {
    flex: 1,
  },
});

export default Home;
