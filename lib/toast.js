'use client';

export const Toaster = () => null;

const show = (type, message) => {
  if (typeof window !== 'undefined') {
    console[type === 'error' ? 'error' : 'log'](`[${type}] ${message}`);
  }
};

const toast = (message) => show('info', message);
toast.success = (message) => show('success', message);
toast.error = (message) => show('error', message);

export default toast;
