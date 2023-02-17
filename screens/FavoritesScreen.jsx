import {
  StyleSheet,
  RefreshControl,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';
import { Loading } from '../components/Loading';
import { FavoriteItem } from '../components/FavoriteItem';


export const FavoritesScreen = ({ navigation }) => {
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
  }

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
          <TouchableOpacity>
            <FavoriteItem
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </TouchableOpacity>
        )}
      >
      </FlatList>
    </View>
  )
};

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