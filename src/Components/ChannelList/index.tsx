import React from 'react';

import {
	List,
	ChannelContainer,
	LeftSide,
	Avatar,
	Column,
	Username,
	Info,
	RightSide,
	WhiteCircle,
} from './styles';

const ChannelList: React.FC = () => {
	const ChannelItem: React.FC = () => (
		<ChannelContainer>
			<LeftSide>
				<Avatar />

				<Column>
					<Username>Rocketseat</Username>
					<Info>10 new videos</Info>
				</Column>
			</LeftSide>

			<RightSide>
				<WhiteCircle />
			</RightSide>
		</ChannelContainer>
	);

	return (
		<List>
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
		</List>
	);
};

export default ChannelList;
