import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import colors from '../utils/colors';

const Profile = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={contact.avatar} name={contact.name} phone={contact.phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={contact.email} />
        <DetailListItem icon="phone" title="Work" subtitle={contact.phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={contact.cell} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  detailsSection: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Profile;
