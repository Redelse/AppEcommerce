import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { CategoriesItem, Header } from "./components";
import CATEGORIES from "./constants/data/categories.json";

export default function App() {
  const onSelecteCategory = (categoryId) => {
    console.warn ({categoryId})
  }
  return (
    <SafeAreaView style={styles.container}> 
     <View style={styles.container}>
      <Header title="Categorias"/>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => <CategoriesItem {...item} onSelecteCategory={onSelecteCategory} />}
        keyExtractor= {(item) => item.id}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
