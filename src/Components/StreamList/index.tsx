import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List, 
  StreamContainer, 
  StreamThumbnail, 
  StreamColumn, 
  StreamRow, 
  StreamHeader, 
  StreamAvatar, 
  StreamUsername, 
  TagRow, 
  TagView, 
  TagText ,
  StreamDescription,
  StreamCategory
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>Luan</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            frontend com nextjs, chacra-ui e graphql
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Science & Technology</StreamCategory>
        </StreamRow>

        <TagRow>
          
          <TagView>
            <TagText>
              Portuguese
            </TagText>
          </TagView>

          <TagView>
            <TagText>
              web development
            </TagText>
          </TagView>

        </TagRow>
      </StreamColumn>


    </StreamContainer>
  )

  return (
    <List>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
    </List>
  );
};

export default StreamList;
