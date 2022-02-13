export default function validation(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Mohon Masukkan Username Anda';
    }
  
    if (!values.email) {
      errors.email = 'Mohon Masukkan Email Anda';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address Anda tidak valid';
    }
    if (!values.password) {
      errors.password = 'Mohon Masukkan Password Anda';
    } else if (values.password.length < 8) {
      errors.password = 'Password minimal 8 karakter';
    }
  
    if (!values.password2) {
      errors.password2 = 'Mohon Masukkan Password Anda';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Password Anda Tidak Sama';
    }
    return errors;
  }