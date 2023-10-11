import { Context, useContext } from 'react';
import { RecoilState, RecoilValueReadOnly, useRecoilValue } from 'recoil';

import { RecoilScopeContext } from '../states/RecoilScopeContext';

/**
 * @deprecated use useRecoilScopedStateV2 instead
 */
export const useRecoilScopedValue = <T>(
  recoilState: (param: string) => RecoilState<T> | RecoilValueReadOnly<T>,
  CustomRecoilScopeContext?: Context<string | null>,
) => {
  const recoilScopeId = useContext(
    CustomRecoilScopeContext ?? RecoilScopeContext,
  );

  if (!recoilScopeId)
    throw new Error(
      `Using a scoped atom without a RecoilScope : ${
        recoilState('').key
      }, verify that you are using a RecoilScope with a specific context if you intended to do so.`,
    );

  return useRecoilValue<T>(recoilState(recoilScopeId));
};
