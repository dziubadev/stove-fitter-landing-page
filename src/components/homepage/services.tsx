import {services} from "@/data/home-data.ts"

export default function Services() {
    return (
        <section className="overflow-hidden py-14 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 place-content-center place-items-center gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {
                        services.map(service => (
                            <div key={service.id}
                                 data-wow-delay={service.delay}
                                 className="mx-auto flex max-w-[370px] flex-col items-center px-3.5 py-5 transition hover:shadow-(--shadow1) lg:px-7 lg:py-10">
                                <div className="mb-5 flex w-full items-center justify-center">
                                    <img src={service.icon} width={70} height={70} alt={service.name} />
                                </div>
                                <h3 className="text-foreground mt-2 mb-5 text-center text-xl font-bold">
                                    {service.name}
                                </h3>
                                <p className="text-gray2 text-center text-base leading-7">
                                    {service.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}