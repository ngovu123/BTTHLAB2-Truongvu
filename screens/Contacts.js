import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../store';
import { fetchContacts } from '../utils/api';
import ContactListItem from '../components/ContactListItem';

const Contacts = ({ navigation }) => {
  const { contacts, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts) => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch((e) => {
        dispatch(fetchContactsError());
      });
  }, []);

  // Sort contacts
  const contactsSorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));

  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={(item) => item.id}
          renderItem={renderContact}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Contacts;