import {
  StyleSheet,
  FlatList,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { NewPost } from '../components/News';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import firebase from '../firebase';


// export const HomeScreen = ({ navigation }) => {
//   const [articles, setArticles] = useState([]);
//   const { navigate } = useNavigation();

//   // Получение данных статей из API
//   useEffect(() => {
//     fetch('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
//       .then(response => response.json())
//       .then(data => setArticles(data));
//   }, []);

//   return (
//     <NavigationContext>
//     <FlatList
//       style={styles.container}
//       data={articles}
//       renderItem={({ item }) => (
//         <View>
//           <Text onPress={() => navigate('Article', { articleId: item.id })}>{item.title}</Text>
//         </View>
//       )}
//       keyExtractor={item => item.id}
//     />
//     </NavigationContext>
//   );
// };


export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      }).finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate('AuthScreen');
      }
    });
    return unsubscribe;
  }, []);

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        style={styles.postList}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FullNew', { id: item.id, image: item.image, description: item.description })}>
            <NewPost
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </TouchableOpacity>
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  postList: {
    width: '100%',
    marginTop: 10
  }
});