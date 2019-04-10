import Swal from 'sweetalert2'

const errorConfig = {
  type: 'error',
  showConfirmButton: false,
  grow: true,
  timer: 3000,
  background: '#424242',
  position: 'center'
}

export const error = Swal.mixin(errorConfig)

const successConfig = {
  type: 'success',
  showConfirmButton: false,
  grow: true,
  timer: 1500,
  background: '#424242',
  backdrop: false,
  position: 'center'
}

export const success = Swal.mixin(successConfig)

const millanConfig = {
  type: 'success',
  showConfirmButton: false,
  grow: true,
  timer: 1500,
  background: '#fff',
  backdrop: false,
  position: 'center'
}

export const millan = Swal.mixin(millanConfig)
