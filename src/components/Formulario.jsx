import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Error } from './Error';

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [mascota, setMascota] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	//Registrando el estado del componente paciente y rellenando el formulario con la info

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			const { mascota, propietario, email, fecha, sintomas } = paciente;

			setMascota(mascota);
			setPropietario(propietario);
			setEmail(email);
			setFecha(fecha);
			setSintomas(sintomas);
		}
	}, [paciente]);

	//Generando un ID para cada objeto o paciente

	const generarId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//Validando Formulario
		if ([mascota, propietario, email, fecha, sintomas].includes('')) {
			console.log('Hay al menos uno campo vacio');

			setError(true);
			return;
		}

		setError(false);

		//Objeto paciente

		const objetoPaciente = {
			mascota,
			propietario,
			email,
			fecha,
			sintomas,
		};

		if (paciente.id) {
			/** Editando paciente **/

			//Generando el id
			objetoPaciente.id = paciente.id;

			//iterando sobre el paciente ya creado y verificando el id para que sea modificado el correcto y no crear uno nuevo al momento de editarlo
			const pacientesActualizados = pacientes.map((pacienteState) =>
				pacienteState.id === paciente.id ? objetoPaciente : pacienteState
			);

			//Pasando la informacion nueva al momento de editar el objeto o paciente anterior y mandar la informacion actualizada
			setPacientes(pacientesActualizados);

			//Limpiando el State dejarlo como un objeto vacio
			setPaciente({});

			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Tu registro ha sido actualizado',
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			//Creando una copia del objeto y creando uno nuevo para agregarlo al arreglo de pacientes

			//Generando el id
			objetoPaciente.id = generarId();

			setPacientes([...pacientes, objetoPaciente]);
		}

		//Reiniciando el Formulario

		setMascota('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
	};

	return (
		<div className='md:w-1/2 lg:w-2/5 mx-8'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
			<p className='text-lg mt-5 text-center mb-8'>
				Añade Pacientes y{' '}
				<span className='font-bold text-emerald-700'>Administralos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
			>
				{error && <Error mensaje={'Todos los campos son obligatorios'} />}
				<div className='mb-5'>
					<label
						htmlFor='mascota'
						className='block text-gray-700 uppercase font-bold'
					>
						Nombre Mascota
					</label>
					<input
						id='mascota'
						type='text'
						placeholder='Nombre de la Mascota'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 text-emerald-700 font-semibold rounded-md'
						value={mascota}
						onChange={(e) => setMascota(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='propietario'
						className='block text-gray-700 uppercase font-bold'
					>
						Nombre Propietario
					</label>
					<input
						id='propietario'
						type='text'
						placeholder='Nombre del Propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 text-emerald-700 font-semibold rounded-md'
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='email'
						className='block text-gray-700 uppercase font-bold'
					>
						Email
					</label>
					<input
						id='email'
						type='email'
						placeholder='correo@correo.com'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 text-emerald-700 font-semibold rounded-md'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='alta'
						className='block text-gray-700 uppercase font-bold'
					>
						Fecha de Alta
					</label>
					<input
						id='alta'
						type='date'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 text-emerald-700 font-semibold rounded-md'
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='sintomas'
						className='block text-gray-700 uppercase font-bold'
					>
						Síntomas
					</label>
					<textarea
						id='sintomas'
						placeholder='Describe los síntomas'
						className='border-2 w-full p-2 mt-2 h-32 placeholder-gray-400 text-emerald-700 font-semibold rounded-md'
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>

				<input
					type='submit'
					className='bg-emerald-700 w-full p-3 text-white uppercase font-bold hover:bg-emerald-900 cursor-pointer transition-colors'
					value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
				/>
			</form>
		</div>
	);
};
