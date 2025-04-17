export const Doctors = () => {
    // Array con los datos de los miembros del equipo
    const teamMembers = [
        {
            name: "Lucas Fernandes",
            role: "Founder",
            imageUrl: "https://pagedone.io/asset/uploads/1696238374.png"
        },
        {
            name: "Camila Rocha",
            role: "Co-Founder",
            imageUrl: "https://pagedone.io/asset/uploads/1696238396.png"
        },
        {
            name: "Gabriel Silva",
            role: "Chairman",
            imageUrl: "https://pagedone.io/asset/uploads/1696238411.png"
        },
        {
            name: "Raissa Costa",
            role: "CEO",
            imageUrl: "https://pagedone.io/asset/uploads/1696238425.png"
        },
        {
            name: "Vitor Carvalho",
            role: "Product Manager",
            imageUrl: "https://pagedone.io/asset/uploads/1696238446.png"
        },
        {
            name: "Amanda Pereira",
            role: "Marketing Manager",
            imageUrl: "https://pagedone.io/asset/uploads/1696238374.png"
        },
        {
            name: "Felipe Martins",
            role: "CTO",
            imageUrl: "https://pagedone.io/asset/uploads/1696238396.png"
        },
        {
            name: "Larissa Gomes",
            role: "Lead Developer",
            imageUrl: "https://pagedone.io/asset/uploads/1696238411.png"
        },
        {
            name: "Thiago Souza",
            role: "Sales Director",
            imageUrl: "https://pagedone.io/asset/uploads/1696238425.png"
        },
        {
            name: "Juliana Lima",
            role: "Customer Support Lead",
            imageUrl: "https://pagedone.io/asset/uploads/1696238446.png"
        },
        {
            name: "Pedro Alves",
            role: "HR Manager",
            imageUrl: "https://pagedone.io/asset/uploads/1696238374.png"
        },
        {
            name: "Beatriz Rocha",
            role: "Data Scientist",
            imageUrl: "https://pagedone.io/asset/uploads/1696238396.png"
        },
        {
            name: "Arthur Barbosa",
            role: "Operations Manager",
            imageUrl: "https://pagedone.io/asset/uploads/1696238411.png"
        },
        {
            name: "Isabela Souza",
            role: "Project Manager",
            imageUrl: "https://pagedone.io/asset/uploads/1696238425.png"
        },
        {
            name: "Ricardo Costa",
            role: "Financial Officer",
            imageUrl: "https://pagedone.io/asset/uploads/1696238446.png"
        }
    ];


    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-36">
                    <h2 className="font-manrope text-4xl text-center font-bold text-gray-900">
                        Healthcare Professionals Directory
                    </h2>
                </div>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="block group md:col-span-2 lg:col-span-1"
                        >
                            <div className="relative mb-6">
                                <img
                                    src={member.imageUrl}
                                    alt={`${member.name} image`}
                                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                                {member.name}
                            </h4>
                            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                                {member.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
