import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoPacientes } from './components/ListadoPacientes';

export function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	//Con este useEffect mantendremos los datos del paciente en el localstorage
	useEffect(() => {
		const obtenerLS = () => {
			const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

			setPacientes(pacientesLS);
		};

		obtenerLS();
	}, []);

	//Con ese useEffect logramos mandar el objeto o paciente al localstorage
	useEffect(() => {
		if (pacientes.length > 0) {
			localStorage.setItem('pacientes', JSON.stringify(pacientes));
		}
	}, [pacientes]);

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);

		setPacientes(pacientesActualizados);
	};

	return (
		<div className='container mx-auto mt-12'>
			<Header />

			<div className='mt-12 md:flex'>
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}
