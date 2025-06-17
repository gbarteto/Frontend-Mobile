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
    flex: 1,
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35,
    paddingBottom: 20
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
  footer:{
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
    paddingTop: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary100,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  }

});