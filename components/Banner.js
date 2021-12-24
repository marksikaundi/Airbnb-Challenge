import Image from "next/image";

function Banner() {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px} xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="https://i.imgur.com/EuA0US5.jpeg"
				layout="fill"
				objectFit="cover"
			/>
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-lg sm:text-xl font-bold text-white">
					Not sure where to go? Perfect.
				</p>
				<button className="bg-white px-10 py-4 text-purple-500 shadow-md rounded-full font-bold my-4 hover:shadow-xl active:scale-90 transition duration-150">
					I'm flexible
				</button>
			</div>
		</div>
	);
}

export default Banner;
