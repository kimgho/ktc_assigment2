import Swal from "sweetalert2";

export const AlertModal = (message, icon = 'warning') => {
    return Swal.fire({
        text: message,
        icon: icon,
        confirmButtonText: "확인"
    })
}