import { useRef, useEffect } from 'react';

// Make an API request to `/api/{path}`
export function apiRequest(path, method = 'GET', data) {
  return fetch(`/api/${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'error') {
        throw new CustomError(response.code, response.message);
      } else {
        return response.data;
      }
    });
}

// Make an API request to any external URL
export function apiRequestExternal(url, method = 'GET', data) {
  return fetch(url, {
    method: method,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((response) => response.json());
}

// Create an Error with custom message and code
export function CustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

// Hook that returns previous value of state
export function usePrevious(state) {
  const ref = useRef();
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
}
