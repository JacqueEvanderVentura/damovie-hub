import { ReactElement } from "react";
import Heading from "../Heading";
import FooterBackground from "./FooterBackground";
import Paragraph from "../Paragraph";
import bestPlaceToCode from "../../assets/svg/footer/best-place-to-code.svg";
import greatPlaceToWork from "../../assets/svg/footer/great-place-to-work.svg";
import efy from "../../assets/svg/footer/efy.svg";
import awsPartner from "../../assets/svg/footer/aws-partner.svg";
const Footer = (): ReactElement => {
	return (
		<footer className="bg-[#03067B] xl:h-96 mt-14 md:mt-28 lg:mt-40 2xl:mt-96">
			<div className="absolute z-10 m-14 mt-20 md:mt-16 lg:mt-20 xl:mt-80 2xl:mt-96 flex flex-col items-start justify-center">
				<Heading
					level={5}
					className="font-semibold lg:text-4xl"
				>
					We are coding the world of tomorrow_
				</Heading>
				<Paragraph className="hidden sm:block w-5/6 xl:w-4/6 lg:text-2xl ">
					DaCodes es una de las mejores empresas de desarrollo de software en
					México y LATAM. Lo que nos separa de los demás es el nivel de
					involucramiento que tenemos en nuestros proyectos y la pasión que
					tenemos por desarrollar productos digitales de calidad mundial. Somos
					un equipo de 220+ dacoders especializados en la planeación, diseño,
					desarrollo, implementación e innovación continua de productos
					digitales disruptivos.
				</Paragraph>
				<div className="hidden md:flex md:space-x-5 ">
					<img
						src={bestPlaceToCode}
						width="96"
						alt="Best Place To Code"
					/>
					<img
						src={greatPlaceToWork}
						width="96"
						alt="Great Place To Work"
					/>
					<img
						src={efy}
						width="96"
						alt="EFY"
					/>
					<img
						src={awsPartner}
						width="96"
						alt="AWS Partner"
					/>
				</div>
			</div>
			<FooterBackground />
		</footer>
	);
};

export default Footer;
