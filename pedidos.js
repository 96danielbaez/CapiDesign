/////////////////////////////
/// CAPI DESIGNER PEDIDOS ///
/////////////////////////////

// TRANSFORMAR LETRA A NÚMERO

function a_to_2(x) {
  // PASAR MINUSCULA A MAYUSCULA
  var a = x;
  var a_aux = a.toUpperCase();
  a = a_aux;

  // PASAR STRING ABECEDARIO A VECTOR
  var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var aux_abc = abc.split("");
  abc = aux_abc;

  // RECORREMOS EL ABECEDARIO Y NOS QUEDAMOS CON SU POSICIÓN
  for (let i = 0; i < abc.length; i++) {
    if (abc[i] == a) {
      var numero = i + 1;
    }
  }

  // DEVOLVEMOS EL VALOR EQUIVALENTE A LA LETRA EN EL ABECEDARIO
  return numero;
}
