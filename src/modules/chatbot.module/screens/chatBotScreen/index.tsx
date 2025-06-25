import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Bubble,
  BubbleProps,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from 'react-native-gifted-chat';

import { Icon } from '../../../../common/components/Icon.tsx';
import { IconsCatalog } from '../../../../common/models/enums/icons.enums.ts';
import { useTheme } from '../../../../common/theme';

import { useChatBotScreen } from './useChatBotScreen.tsx';

export const ChatBotScreen: FC = () => {
  const { onSend, messages, isTyping, navigateBack } = useChatBotScreen();

  const colorScheme = useColorScheme();
  const styles = useStyles();
  const { colors } = useTheme();

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
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
            <Icon
              name={colorScheme === 'dark' ? IconsCatalog.BackButtonWhite : IconsCatalog.BackButton}
            />
          </TouchableOpacity>
          <Text style={styles.title}>AI Assistant</Text>
        </View>
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

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    fill: {
      flex: 1,
      backgroundColor: colors.bg3,
    },
    container: {
      flex: 1,
      backgroundColor: colors.bg3,
      paddingHorizontal: 30,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    backButton: {
      position: 'absolute',
      left: 0,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Roboto-Bold',
      color: colors.textSecondary,
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
      backgroundColor: colors.backgroundPrimary,
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
};
