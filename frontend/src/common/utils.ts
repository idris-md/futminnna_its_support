import { Message } from "@/component/message";
import { showErrorToast } from "@/component/toast_notifier";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Store } from "react-notifications-component";

export function dataURLtoBlob(dataurl: string) {
  if (!dataurl) return "djdf";
  var arr: string[] = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)![1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export function getErrorMessageFromError(
  error: AxiosError | unknown,
  hideToast: boolean = false
) {
  console.log(error);
  // console.log("client ERRRRRRRRRRRRRR", error?.response);
  let errorMessage = "Unknown error occured, please try again.";
  if (error instanceof AxiosError) {
    errorMessage = error?.response?.data?.message;
  }
  if (!hideToast) {
    showErrorToast(errorMessage);
  }
  //   Store.addNotification({
  //     title: "Error!",
  //     message: errorMessage,
  //     type: "success",
  //     insert: "top",
  //     container: "top-right",
  //     // animationIn: ["animate__animated", "animate__fadeIn"],
  //     // animationOut: ["animate__animated", "animate__fadeOut"],
  //     dismiss: {
  //       duration: 2500,
  //       onScreen: true,
  //     },
  //   });
  return errorMessage;
}

export function formatToCurrency(value: number) {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "ngn",
  });
  return formatter.format(value);
}
