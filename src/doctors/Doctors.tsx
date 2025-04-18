import { doctorsList } from "../data/doctors";

export const Doctors = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-36">
                    <h2 className="font-manrope text-4xl text-center font-bold text-gray-900">
                        Healthcare Professionals Directory
                    </h2>
                </div>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
                    {doctorsList.map((member, index) => (
                        <div key={index} className="block group md:col-span-2 lg:col-span-1 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="relative mb-6">
                                <img
                                    src={member.imageUrl}
                                    alt={`${member.name} image`}
                                    className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-solid border-transparent group-hover:border-indigo-600 transition-all duration-500"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                                {member.name}
                            </h4>
                            <p className="text-center text-sm text-gray-500 mb-2">{member.specialty}</p>
                            <p className={`text-center text-sm mb-2 ${member.availability ? 'text-green-500' : 'text-red-500'}`}>
                                {member.availability ? 'Available' : 'Not Available'}
                            </p>
                            <p className="text-center text-sm text-gray-500">{member.location}</p>
                            <div className="mt-4 flex justify-center">
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
