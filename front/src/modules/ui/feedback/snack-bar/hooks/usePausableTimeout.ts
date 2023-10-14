import { useCallback, useEffect, useRef } from 'react';

export const usePausableTimeout = (callback: () => void, delay: number) => {
  // eslint-disable-next-line twenty/no-state-useref
  const savedCallback = useRef<() => void>(callback);
  // eslint-disable-next-line twenty/no-state-useref
  const remainingTime = useRef<number>(delay);
  // eslint-disable-next-line twenty/no-state-useref
  const startTime = useRef<number>(Date.now());
  // eslint-disable-next-line twenty/no-state-useref
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = () => {
    if (savedCallback.current) {
      savedCallback.current();
    }
  };

  const startTimeout = useCallback(() => {
    startTime.current = Date.now();
    timeoutId.current = setTimeout(tick, remainingTime.current);
  }, []);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout loop
  useEffect(() => {
    if (delay !== null) {
      startTimeout();
      return () => {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }
      };
    }
  }, [delay, startTimeout]);

  const pauseTimeout = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    const elapsedTime = Date.now() - startTime.current;
    remainingTime.current = remainingTime.current - elapsedTime;
  };

  const resumeTimeout = () => {
    startTimeout();
  };

  return { pauseTimeout, resumeTimeout };
};
