import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { Platform } from 'react-native';

const statusbarHeight =
	Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
	background-color: ${colors.primary};
	flex: 1;
	padding-top: ${statusbarHeight}px;
`;

export const Container = styled.View`
	padding-left: 24px;
`;

export const Main = styled.View``;
