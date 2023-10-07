import React from 'react';
import { View, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const ContactListItem = ({ name, avatar, phone, onPress }) => {
  return (
    <TouchableHighlight
      underlayColor="#D8D8D8"
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.contactInfo}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
  },
  details: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 4,
  },
});

export default ContactListItem;
