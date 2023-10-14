import { useForm } from "react-hook-form";
import Heading from "../Heading";

const LoginForm = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const watchedEmail = watch("email");
	const watchedPassword = watch("password");
	const watchedConditions = watch("conditions");
	const onSubmit = async (): Promise<void> => {
		try {
			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDRhMTliMWNjZWE2YzgxMzNmNTZmOWQzYTAxNWQ2YyIsInN1YiI6IjY1MjhiOGZmMWYzZTYwMDEzOTlkNjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CiZ4CzMTR_bZspeGrXylAn9ct5VBPDK-7jgjgiQ4MOA",
				},
			};

			const response = await fetch(
				"https://api.themoviedb.org/3/authentication",
				options
			);
			const data = await response.json();

			console.log(data);
			// Store the token in local storage or state management library
			// Redirect to the "Listado de películas" view
		} catch (error) {
			// Handle network or server error
			console.error(error);
		}
	};

	return (
		<form
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-5 sm:mt-8 flex-grow m-10 md:m-20"
		>
			<header className="flex flex-col ">
				<Heading level={2}>Login</Heading>
				<Heading level={6}>¡Bienvenido!</Heading>
			</header>
			<div className="flex flex-col space-y-3">
				<label className="text-sm md:text-sm sm:ml-4">
					Correo electrónico de Dacodes
				</label>
				<input
					type="email"
					{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
					className="bg-[#5141EA] rounded-[50px] px-5 max-w-lg xl:max-w-lg h-8 sm:h-10 md:h-9 2xl:h-20    "
				/>
				{errors.email && <span>Email is required and must be valid</span>}
			</div>
			<div className="flex flex-col space-y-3">
				<label className="text-sm md:text-sm sm:ml-4">Contraseña</label>
				<input
					type="password"
					{...register("password", { required: true, minLength: 7 })}
					className="bg-[#5141EA] rounded-[50px] px-5 max-w-lg xl:max-w-lg h-8 sm:h-10 md:h-9 2xl:h-20    "
					autoComplete="current-password"
				/>
				{errors.password && (
					<span>
						Password is required and must be at least 7 characters long
					</span>
				)}
			</div>
			<div>
				<label className="italic">
					<input
						type="checkbox"
						{...register("conditions", { required: true })}
						className="sm:mr-2"
					/>
					He leído los términos y condiciones
				</label>
				{errors.conditions && <span>Conditions must be accepted</span>}
			</div>
			<button
				type="submit"
				disabled={
					!watchedEmail || watchedPassword.length < 7 || !watchedConditions
				}
				className="rounded-[50px] w-36 h-10 bg-gradient-to-r opacity-100 hover:opacity-80 hover:scale-95 bg-green-400 from-green-400 via-blue-500 to-indigo-600 hover:from-green-600 hover:via-blue-800 hover:to-indigo-900 transition-all hover:transition-all hover:duration-500 duration-300 disabled:bg-gray-500 disabled:from-neutral-300 disabled:via-neutral-500 disabled:to-neutral-950 disabled:cursor-not-allowed"
			>
				Crear cuenta
			</button>
		</form>
	);
};

export default LoginForm;
