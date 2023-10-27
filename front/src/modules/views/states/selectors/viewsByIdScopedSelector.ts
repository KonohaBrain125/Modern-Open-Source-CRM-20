import { selectorFamily } from 'recoil';

import { View } from '@/views/types/View';

import { viewsScopedState } from '../viewsScopedState';

export const viewsByIdScopedSelector = selectorFamily<
  Record<string, View>,
  string
>({
  key: 'viewsByIdScopedSelector',
  get:
    (scopeId) =>
    ({ get }) =>
      get(viewsScopedState({ scopeId: scopeId })).reduce<Record<string, View>>(
        (result, view) => ({ ...result, [view.id]: view }),
        {},
      ),
});
