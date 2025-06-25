import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import { ChatResponse } from '../../../../common/models/types/openAI.types.ts';
import { NetworkService } from '../../../../config/network';

export const useChatBotScreen = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! I am your AI assistant. How can I help you today?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI',
        },
      },
    ]);
  }, []);

  const onSend = useCallback(async (newMessages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));

    const userMessage = newMessages[0].text;
    setIsTyping(true);

    try {
      const response = await NetworkService.post<ChatResponse>('openai', '/chat/completions', {
        model: 'gpt-4o-mini',
        messages: [{ role: 'assistant', content: userMessage }],
      });

      const reply = response?.choices[0]?.message?.content;

      const aiMessage: IMessage = {
        _id: Math.random().toString(),
        text: reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI',
        },
      };

      setMessages(previousMessages => GiftedChat.append(previousMessages, [aiMessage]));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Message:', error.message);
        console.log('Response:', error.response?.data);
        console.log('Status:', error.response?.status);
      } else {
        console.log('Unexpected error:', error);
      }
    } finally {
      setIsTyping(false);
    }
  }, []);

  const navigateBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return {
    navigateBack,
    isTyping,
    onSend,
    messages,
  };
};
