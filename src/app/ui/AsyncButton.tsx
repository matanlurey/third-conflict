import Button, { ButtonProps } from 'antd/lib/button';
import { useEffect, useState } from 'react';

export function AsyncButton(
  props: ButtonProps & { onClick: () => Promise<void> },
): JSX.Element {
  const [avoidMultipleClicks, setAvoidMultipleClicks] = useState<
    number | undefined
  >();
  function clearTimer() {
    clearTimeout(avoidMultipleClicks);
    setAvoidMultipleClicks(undefined);
  }
  useEffect(() => {
    return clearTimer;
  }, []);
  return (
    <Button
      {...props}
      disabled={props.disabled || avoidMultipleClicks !== undefined}
      loading={!!avoidMultipleClicks}
      onClick={async () => {
        // Force the button to be disabled.
        setAvoidMultipleClicks(-1);
        try {
          await props.onClick();
        } finally {
          // Wait 500ms after the promise completes to re-enable.
          const handle = (setTimeout(clearTimer, 500) as unknown) as number;
          setAvoidMultipleClicks(handle);
        }
      }}
    />
  );
}
