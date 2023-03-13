import { createContext, useState } from "react";

const ModalContext = createContext({
  isSubmitting: false,
  setIsSubmitting: () => {},
  isWaitingToSubmit: false,
  setIsWaitingToSubmit: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWaitingToSubmit, setIsWaitingToSubmit] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isSubmitting,
        setIsSubmitting,
        isWaitingToSubmit,
        setIsWaitingToSubmit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
