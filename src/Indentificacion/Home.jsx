import React, { useState } from 'react';
import MyTable from './Table';
import Swal from 'sweetalert2';
import data from './Datasets.json'; // Importa tu JSON de datos
import RealTimeLineChart from './GraficaLine';

import './PatogenoIdentificacion.css'; // Importa tu archivo de estilos CSS

const PatogenoIdentificacion = () => {
  const [secuenciaADN, setSecuenciaADN] = useState('');
  const [resultado, setResultado] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const msgEncontrado = (nombre, secuencia) => {
    Swal.fire(
      'Patógeno encontrado',
      'Nombre: '+nombre,
      'success'
    );
  };

  const msgNoEncontrado = () => {
    Swal.fire(
      'Patógeno no encontrado',
      'No se ha encontrado un patógeno en la secuencia de ADN.',
      'error'
    );
  };

  const handleIdentificarPatogeno = () => {
    // Puedes activar un indicador de carga mientras se realiza la búsqueda
    setIsLoading(true);

    // Simula una pausa para simular una búsqueda en una base de datos
    setTimeout(() => {
      // Encuentra el patógeno correspondiente en los datos
      const patogenoEncontrado = data.find(
        (registro) => registro.SecuenciaADN === secuenciaADN
      );

      // Detiene el indicador de carga
      setIsLoading(false);

      if (patogenoEncontrado) {
        // Si se encontró un patógeno, muestra el mensaje de éxito
        setResultado(`Patógeno identificado: ${patogenoEncontrado.PatogenoIdentificado}`);
        msgEncontrado(patogenoEncontrado.PatogenoIdentificado );
      } else {
        // Si no se encontró un patógeno, muestra el mensaje de error
        setResultado('Patógeno no encontrado en la secuencia de ADN.');
        msgNoEncontrado();
      }
    }, 2000); // Simulación de tiempo de búsqueda (2 segundos)
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>Identificación de Patógenos de Plantas</h2>
      </div>
      <div className="content">
        <div className="table-container">
          <h1>Tabla de registros</h1>
          <MyTable />
        </div>
        <div className="form-container">
        <h1>Identificación de Patógenos</h1>
          <input
            type="text"
            placeholder="Ingresa la secuencia de ADN"
            value={secuenciaADN}
            onChange={(e) => setSecuenciaADN(e.target.value)}
          />
          <button onClick={handleIdentificarPatogeno}>Identificar</button>
          {isLoading && <p>Buscando patógeno...</p>}
          <div>
            <h3>Resultado:</h3>
            <p>{resultado}</p>
            
          </div>
          <RealTimeLineChart />
        </div>
        
      </div>
    </div>
  );
};

export default PatogenoIdentificacion;
