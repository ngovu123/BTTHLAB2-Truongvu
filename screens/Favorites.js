import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../store';
import ContactThumbnail from '../components/ContactThumbnail';

const keyExtractor = ({ id }) => id;

const Favorites = ({ navigation }) => {
  const { contacts, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const favorites = contacts.filter((contact) => contact.favorite);

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return <ContactThumbnail avatar={avatar} onPress={() => navigation.navigate('Profile', { contact: item })} />;
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
});

export default Favorites;