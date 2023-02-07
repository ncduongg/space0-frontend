import React from "react";
import { confirmAlert } from "react-confirm-alert";

const AlertCustom = (props) => {
  const submit = () => {
    props.onConfirm();
    props.onCancel();
  };

  return (
    <div className="custom-confirm-alert">
      <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-6 text-center">
            <svg
              aria-hidden="true"
              class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {props.title}
            </h3>
            <button
              data-modal-hide="popup-modal"
              onClick={submit}
              type="button"
              class="text-white bg-[#00df9a] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Mua Ngay
            </button>
            <button
            onClick={props.onCancel}
              data-modal-hide="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Không, tôi phải suy nghĩ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlertCustom;
// const showConfirmAlert = (options) => {
//   confirmAlert({
//     customUI: ({ onClose }) => (
//       <AlertCustom
//         title={options.title}
//         message={options.message}
//         onConfirm={options.onConfirm}
//         onCancel={onClose}
//       />
//     ),
//   });
// };
