import { useState } from 'react';
import { Toast } from '../../../ui/Toast';

import cls from './AlertList.module.scss';

type Toast = {
  title: 'Success' | 'Danger' | 'Warning';
  message: string;
  variant?: 'success' | 'danger' | 'warning';
};

export function useAlertList() {
  const [list, setAlerts] = useState<Toast[]>([]);

  const createToast = (options: Toast): void => {
    setAlerts([...list, options]);
    setTimeout(() => {
      setAlerts((toast) => toast.slice(1));
    }, 4000);
  };

  const alerts = (
    <div className={cls.AlertList}>
      {list.map((toast, index) => (
        <Toast
          key={index}
          title={toast.title}
          message={toast.message}
          variant={toast.variant}
        />
      ))}
    </div>
  );

  return {
    alerts,
    createToast,
  };
}
