// services/network.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { StringifiableRecord } from 'query-string';
import { stringifyUrl } from 'query-string/base';

type ClientMap = Record<string, AxiosInstance>;

export namespace NetworkService {
  const clients: ClientMap = {};

  export const createClient = (name: string, baseUrl: string, headers?: Record<string, string>) => {
    clients[name] = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  };

  const getClient = (name: string): AxiosInstance => {
    const client = clients[name];
    if (!client) throw new Error(`Network client "${name}" not initialized`);
    return client;
  };

  export const get = async <T>(
    clientName: string,
    endpoint: string,
    query: object = {},
  ): Promise<T> => {
    const client = getClient(clientName);
    const response: AxiosResponse<T> = await client.get(
      stringifyUrl({ url: endpoint, query: query as StringifiableRecord }),
    );
    return response.data;
  };

  export const post = async <T>(
    clientName: string,
    endpoint: string,
    body: unknown,
  ): Promise<T> => {
    const client = getClient(clientName);
    const response: AxiosResponse<T> = await client.post(endpoint, body);
    return response.data;
  };
}
