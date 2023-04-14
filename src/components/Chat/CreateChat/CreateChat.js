import { StreamChat } from 'stream-chat';
import { auth } from '../../../firebase';
import { useUser } from 'hook/users';
import { Chat, Channel, ChannelHeader, MessageList, MessageInput, Window } from 'stream-chat-react';

 async function CreateChat () {
  const AuthUser = auth.currentUser;
 console.log("AuthUser",AuthUser);

 //I want it to import the user data from the registry in the useUser method but it returns UNDEFINED
 
  // const { user } = useUser(AuthUserUid) || {};
  // console.log("user",user);

 const userToken = AuthUser.accessToken;
 const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);


await client.connectUser(
  {
    id: AuthUser.uid,
    name: AuthUser.email,
    image: AuthUser.photoURL,
  },
  userToken
);
const channel = client.channel('messaging', 'godevs', {
  name: 'Talk about React Native',
  image: 'https://bit.ly/2TIt8NR',
  members: ['thierry', 'tommaso'],
});
await channel.watch();
channel.sendMessage({
  text: 'Hello world',
});
return (
  <Chat client={client} theme="team light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
    </Channel>
  </Chat>
);
}
export default CreateChat;
