import { useState } from "react";

export const useManageError = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const setError = error => {
    setErrorMessage(error);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  return {errorMessage, setError};
};
