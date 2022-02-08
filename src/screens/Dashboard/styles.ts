import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

import { DatalistProps } from ".";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFPercentage(42)}px;
	background-color: ${({ theme }) => theme.colors.primary};
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
`;

export const UserWrapper = styled.View`
	width: 100%;
	margin-top: ${getStatusBarHeight() + RFValue(28)}px;
	padding: 0 ${RFValue(24)}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const UserInfo = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Photo = styled.Image`
	width: ${RFValue(48)}px;
	height: ${RFValue(48)}px;
	border-radius: 10px;
`;

export const User = styled.View`
	margin-left: ${RFValue(17)}px;
`;

export const UserGreeting = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
})`
	width: 100%;
	margin-top: ${RFPercentage(20)}px;
	position: absolute;
`;

export const Transactions = styled.View`
	flex: 1;
	margin-top: ${RFPercentage(12)}px;
	padding: 0 ${RFValue(24)}px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
	margin-bottom: ${RFValue(16)}px;
`;

export const TransactionList = styled(
		FlatList as new () => FlatList<DatalistProps>
	).attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		paddingBottom: getBottomSpace()
	}
})``;