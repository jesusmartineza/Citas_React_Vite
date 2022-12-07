import Swal from 'sweetalert2';

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { mascota, propietario, email, fecha, sintomas, id } = paciente;

	const handleEliminar = () => {
		Swal.fire({
			title: '¿Deseas eliminar este registro?',
			text: '¡Ya no se podran recuperar los datos!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#047857',
			cancelButtonColor: '#b91c1c',
			confirmButtonText: 'Si, eliminar!',
		}).then((result) => {
			if (result.isConfirmed) {
				eliminarPaciente(id);
				Swal.fire('Hecho!', 'Tu registro ha sido eliminado.', 'success');
			}
		});
	};

	return (
		<div className='bg-white mx-3 my-3 shadow-md px-5 py-5 rounded-xl'>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Nombre:{' '}
				<span className='font-medium normal-case text-emerald-700'>{mascota}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Propietario:{' '}
				<span className='font-medium normal-case text-emerald-700'>
					{propietario}
				</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Email:{' '}
				<span className='font-medium normal-case text-emerald-700'>{email}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Fecha de Alta:{' '}
				<span className='font-medium normal-case text-emerald-700'>{fecha}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Sintomas:{' '}
				<span className='font-medium normal-case text-emerald-700'>{sintomas}</span>
			</p>

			<div className='flex justify-between mt-8'>
				<button
					type='button'
					className='py-2 px-10 bg-emerald-700 hover:bg-emerald-900 rounded-md font-semibold'
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					type='button'
					className='py-2 p-10 bg-red-700 hover:bg-red-900 rounded-md font-semibold'
					onClick={handleEliminar}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};
