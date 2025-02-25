import { Flip, toast } from "react-toastify";

export const notify = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 2500,
    transition: Flip,
  });

export const errorToast = (message) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    transition: Flip,
  });
