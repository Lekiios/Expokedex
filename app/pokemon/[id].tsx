import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

const PokemonPage = () => {
  const { id } = useLocalSearchParams() as { id: string };
  const { data, isFetching } = useFetchQuery(`/pokemon/${id}`);

  if (isFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{id}</Text>
      <Text>{data.name}</Text>
    </View>
  );
};
export default PokemonPage;
