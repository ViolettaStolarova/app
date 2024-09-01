import { useCallback, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useAlertList } from 'shared/lib/hooks/useAlertList/useAlertList';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { getErrorMessage } from 'shared/lib/error/getErrorMessage';

export const useAuthByUsername = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const { alerts, createToast } = useAlertList();

  const addAlert = useCallback(
    (errorMessage: string) => {
      createToast({
        title: 'Danger',
        variant: 'danger',
        message: errorMessage,
      });
    },

    [createToast]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername(username));

    setUsername('');

    if (result.meta.requestStatus === 'rejected') {
      const errorMessage = getErrorMessage(result.payload);
      addAlert(errorMessage);
    }
  }, [addAlert, dispatch, username]);

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value.trim());
  }, []);

  const isLoginButtonActive = useCallback(
    () => username.trim() !== '',
    [username]
  );

  return {
    username,
    onLoginClick,
    onChangeUsername,
    isLoginButtonActive,
    alerts,
  };
};
