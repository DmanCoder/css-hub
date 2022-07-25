import { useCallback, useRef, useState } from 'react';
import { LongPressParamsTypes } from './TopNavigation.types';

const isTouchEvent = (event: any) => {
  return 'touches' in event;
};

const preventDefault = (event: any) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

const useLongPress = ({
  onPageReset,
  onShowCountryList,
  shouldPreventDefault = { isPrevented: true, delay: 300 },
}: LongPressParamsTypes) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout: any = useRef();
  const target: any = useRef();

  const start = useCallback(
    (event: any) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onShowCountryList(event);
        setLongPressTriggered(true);
      }, shouldPreventDefault.delay);
    },
    [onShowCountryList, shouldPreventDefault.delay, shouldPreventDefault],
  );

  const clear = useCallback(
    (event: any, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onPageReset();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onPageReset, longPressTriggered],
  );

  return {
    onMouseDown: (e: any) => start(e),
    onTouchStart: (e: any) => start(e),
    onMouseUp: (e: any) => clear(e),
    onMouseLeave: (e: any) => clear(e, false),
    onTouchEnd: (e: any) => clear(e),
  };
};

export default useLongPress;
