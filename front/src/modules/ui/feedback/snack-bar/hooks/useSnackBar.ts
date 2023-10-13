import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import {
  SnackBarOptions,
  snackBarSetQueueState,
} from '../states/snackBarState';

export const useSnackBar = () => {
  const setSnackBarQueue = useSetRecoilState(snackBarSetQueueState);

  const enqueueSnackBar = (
    message: string,
    options?: Omit<SnackBarOptions, 'message' | 'id'>,
  ) => {
    setSnackBarQueue({
      id: uuidv4(),
      message,
      ...options,
    });
  };

  return { enqueueSnackBar };
};
