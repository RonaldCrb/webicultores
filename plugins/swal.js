import Swal from 'sweetalert2'

const errorConfig = {
  type: 'error',
  showConfirmButton: false,
  grow: true,
  timer: 3000,
  background: '#fff',
  position: 'center'
}

export const error = Swal.mixin(errorConfig)

const successConfig = {
  type: 'success',
  showConfirmButton: false,
  grow: true,
  timer: 1500,
  background: '#fff',
  backdrop: false,
  position: 'center'
}

export const success = Swal.mixin(successConfig)
