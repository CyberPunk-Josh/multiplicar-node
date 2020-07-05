const fs = require('fs');
const colors = require('colors');





let listarTabla = (base, limite = 10) => {

    console.log('================================='. white);
    console.log(`=====Tabla del ${base}======`. blue);
    console.log('================================='. red);
  for (let i = 1; i<= limite; i ++){
    console.log(`${base} * ${i} = ${base*i}`);
  }
  

}



let crearArchivo = (base, limite = 10) => {

  return new Promise((resolve, reject) =>{

    if ( !Number(base) ){
      reject(`El valor introducido: ${ base }, no es un numero`);
      return;
    }

    let data = '';

    for ( let i = 1; i<= limite; i++){
      data += ` ${base} * ${i} = ${base*i}\n`;
    } 
  
    // El siguiente condifo viene de la documentacion de node
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err)
        reject (err);
      else
        resolve(colors.green(`tabla-${base}-al-${limite}.txt`));
    });

  });

}

// Esto se hace para poder exportar la funcion a otros modulos o programas
module.exports = {
  crearArchivo,
  listarTabla
}











