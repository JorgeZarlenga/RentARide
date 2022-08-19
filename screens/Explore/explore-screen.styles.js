import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingBottom: 24,
    flex: 1,
  },
  searchInput: {
    borderWidth: 1,
    height: 32,
    borderRadius: 6,
    marginHorizontal: 10,
    borderColor: '#c7c7c7',
    paddingHorizontal: 12,
  },
  welcomeText: {
    fontSize: 25,
    padding: 20,
    fontWeight: '600',
    color: '#0670BF',
  },
  card: {
    borderWidth: 1,
    width: '46%',
    backgroundColor: '#F0F0F0',
    borderColor: '#D9DCDD',
    alignItems: 'flex-start',
    margin: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    height: 220,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 130,
  },
  icon: {
    width: 24,
    height: 24,
  },
  banner: {
    width: '100%',
    height: 190,
  },
  subtitle: {
    textAlign: 'left',
    margin: 4,
    color: '#47484C',
  },
});

export default styles;
