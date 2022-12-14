const Services = () => {
	return (
		<div id="service" className=" max-w-full mx-0 mt-34 py-24  bg-transparent ">
			<h1 className=" mx-1 md:mx-12  p-0 md:p-3 text-5xl font-bold text-indigo-600">Services</h1>
			<div className="w-full mx-auto  p-1 md:p-6 flex flex-col md:flex-row">
				<div className=" left mx-0 md:mx-3 w-full md:w-1/2 h-auto items-center  ">
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white  hover:bg-gradient-to-r from-blue-100 rounded items-center  hover:shadow-md">
						<img src="img/3.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-60 md:h-60 rounded object-cover" />
						<p className="mx-auto p-8 text-base text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
					</div>
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white  hover:bg-gradient-to-r from-blue-100 rounded items-center  hover:shadow-md">
						<p className="mx-auto p-8 text-base text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
						<img src="img/4.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-60 md:h-60 rounded object-cover" />
					</div>
				</div>
				<div className=" right mx-0 md:mx-3  w-full md:w-1/2   h-auto items-center ">
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white  hover:bg-gradient-to-r from-blue-100 rounded items-center  hover:shadow-md">
						<img src="img/2.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-60 md:h-60 rounded object-cover" />
						<p className="mx-auto p-8 text-base text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
					</div>
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white  hover:bg-gradient-to-r from-blue-100 rounded items-center  hover:shadow-md">
						<p className="mx-auto p-8 text-base text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
						<img src="img/1.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-60 md:h-60 rounded object-cover" />
					</div>
				</div>
			</div>
			<a href="/contact" className="  mx-10 my-12 py-3 px-8 bg-violet-600 rounded-lg  text-lg text-white  font-medium">
				Request Service
			</a>
		</div>
	);
};

export default Services;
