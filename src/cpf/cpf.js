export default function cpf(value, promise) {

  if(value && value.length) {

    return Promise.resolve();

  }

  return Promise.reject();

}
