import Card from "@/components/Card";
import PText from "@/components/PText";
import PokemonCard from "@/components/PokemonCard";
import { getPokemonId } from "@/functions/pokemon";
import { useColorsTheme } from "@/hooks/useColorsTheme";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const colors = useColorsTheme();

  const { data, isFetching, fetchNextPage } =
    useInfiniteFetchQuery("/pokemon?limit=21");
  const pokemons = data?.pages.flatMap((page) => page.results) || [];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
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
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list]}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.primary} /> : <></>
          }
          onEndReached={() => fetchNextPage()}
          renderItem={({ item }) => (
            <PokemonCard
              style={{ flex: 1 / 3 }}
              id={getPokemonId(item.url)}
              name={item.name}
            />
          )}
          keyExtractor={(item) => item.url}
        />
      </Card>
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
    paddingTop: 12,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
});

export default Home;
