import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
    image: {
    width: '100%',
    height: 200,
    marginTop: 15
  },
  
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 25,
    textAlign: 'center',
    fontWeight:'bold',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35
  },
  controlsbutons: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.text,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  linha: {
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  carroussel: {
    width: '100%',
    paddingVertical: 10,
    marginTop: 20
  },
  carrousseTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  carrousselItems:{
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    marginTop: 20,
  },
  carrousselItem: {
    height: 200,
    padding: 10,
    alignItems: 'center'
  },
  carrousselImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  footer:{
    width: '100%',
    paddingHorizontal: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.secondary100,
  }

});