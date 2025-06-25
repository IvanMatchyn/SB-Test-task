import { Account } from '../../../../common/models/types/mockData.types.ts';

export interface AccountListStoreState {
  loading: boolean;
  data: Account[];
}
