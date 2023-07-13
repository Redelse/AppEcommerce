import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "./styles";

import { CategoriesItem  } from "../../components";
import CATEGORIES from "../../constants/data/categories.json";


function Categories({onSelectCategory}) {


  return (
    <SafeAreaView style={styles.container}> 
     <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        style={styles.categoryContainer} 
        contentContainerStyle={styles.listCategory}
        renderItem={({ item }) => 
        <CategoriesItem {...item} onSelectCategory={onSelectCategory} />}
        keyExtractor= {(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </SafeAreaView>
  );
}



export default Categories;