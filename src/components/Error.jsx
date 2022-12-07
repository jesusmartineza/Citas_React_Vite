export const Error = ({ mensaje }) => {
	return (
		<div className='bg-red-800 text-center uppercase text-white font-bold p-3 mb-3 rounded-md'>
			<p> {mensaje} </p>
		</div>
	);
};
