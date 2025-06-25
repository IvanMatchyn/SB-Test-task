import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Bubble,
  BubbleProps,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from 'react-native-gifted-chat';

import { useChatBotScreen } from './useChatBotScreen.tsx';

export const ChatBotScreen: FC = () => {
  const { onSend, messages, isTyping } = useChatBotScreen();

  const renderBubble = (props: BubbleProps<IMessage>) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: styles.leftBubble,
        right: styles.rightBubble,
      }}
      textStyle={{
        left: styles.leftText,
        right: styles.rightText,
      }}
    />
  );

  const renderInputToolbar = (props: InputToolbarProps<IMessage>) => (
    <InputToolbar {...props} containerStyle={styles.inputToolbar} />
  );

  return (
    <SafeAreaView style={styles.fill}>
      <View style={styles.fill}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{ _id: 1 }}
          isTyping={isTyping}
          renderBubble={renderBubble}
          renderInputToolbar={renderInputToolbar}
          messagesContainerStyle={styles.topOffset}
        />
        {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topOffset: {
    marginBottom: 40,
  },
  inputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  leftBubble: {
    backgroundColor: '#F0F0F0',
    padding: 6,
  },
  rightBubble: {
    backgroundColor: '#007AFF',
    padding: 6,
  },
  leftText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
  },
  rightText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
  },
});
