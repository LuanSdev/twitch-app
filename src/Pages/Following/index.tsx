import React from 'react';

import { FlatList } from 'react-native';
import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import Title from '../../Components/Title';
import CategoriesList from '../../Components/CategoriesList';

import { Container, Wrapper, Main } from './styles';
import StreamList from '../../Components/StreamList';
import ChannelList from '../../Components/ChannelList';

interface _Item {
	key: string;
	render: () => JSX.Element;
	isTitle?: boolean;
}

const Following: React.FC = () => {
	const { data, indexes } = React.useMemo(() => {
		const items: _Item[] = [
			{
				key: 'PAGE_HEADING',
				render: () => <Heading>Following</Heading>,
			},
			{
				key: 'FOLLOWED_cATEGORIES',
				render: () => <Title>Followed categories</Title>,
				isTitle: true,
			},
			{
				key: 'c1',
				render: () => <CategoriesList />,
			},
			{
				key: 'LIVE_CHANNELS',
				render: () => <Title>Live channels</Title>,
				isTitle: true,
			},
			{
				key: 'c2',
				render: () => <StreamList />,
			},
			{
				key: 'CONTINUE_WATCHING',
				render: () => <Title>Continue watching</Title>,
				isTitle: true,
			},
			{
				key: 'c3',
				render: () => <StreamList />,
			},
			{
				key: 'OFFLINE_CHANNELS',
				render: () => <Title>Offline channels</Title>,
				isTitle: true,
			},
			{
				key: 'c4',
				render: () => <ChannelList />,
			},
		];

		const indexes: number[] = [];

		items.forEach((item, index) => item.isTitle && indexes.push(index));

		return {
			data: items,
			indexes,
		};
	}, []);

	return (
		<Wrapper>
			<Header />

			<Container>
				<Main>
					<FlatList<_Item>
						data={data}
						renderItem={({ item }) => item.render()}
						keyExtractor={(item) => item.key}
						stickyHeaderIndices={indexes}
						onRefresh={() => {}}
						refreshing={false}
					/>
				</Main>
			</Container>
		</Wrapper>
	);
};

export default Following;
