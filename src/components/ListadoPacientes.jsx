import { Paciente } from './Paciente';

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<div className='md:w-1/2 lg:w-3/5 h-screen mx-9'>
			{pacientes && pacientes.length ? (
				<>
					<h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
					<p className='text-xl text-center mt-5 mb-6'>
						Administra tus{' '}
						<span className='text-emerald-700 font-bold'>
							Pacientes y Citas
						</span>
					</p>
					<div className='md:h-screen overflow-y-scroll'>
						{pacientes.map((paciente) => (
							<Paciente
								key={paciente.id}
								paciente={paciente}
								setPaciente={setPaciente}
								eliminarPaciente={eliminarPaciente}
							/>
						))}
					</div>
				</>
			) : (
				<>
					<h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
					<p className='text-xl text-center mt-5 mb-6'>
						Comienza agregando pacientes{' '}
						<span className='text-emerald-700 font-bold'>Y verlos aqui</span>
					</p>
				</>
			)}
		</div>
	);
};
