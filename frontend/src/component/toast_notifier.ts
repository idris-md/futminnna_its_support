import { Store } from "react-notifications-component";

export const showSuccessToast = (message:string) => {
  Store.addNotification({
    title: "Success!",
    message: message,
    type: "success",
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export const showErrorToast = (message:string) => {
  Store.addNotification({
    title: "Error!",
    message: message,
    insert: "top",
    type: "danger",
    container: "top-right",
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export const showInfoToast = (message:string) => {
  Store.addNotification({
    title: "Error!",
    message: message,
    insert: "top",
    type: "info",
    container: "top-right",
    dismiss: {
      duration: 2500,
      onScreen: true,
    },
  });
};
