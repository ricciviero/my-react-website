export default function About({ riccardoData }) {

    return (
        <>
            <section className="flex flex-col justify-center items-center p-12">
                <div className="flex flex-col justify-center p-0 w-full max-w-[800px]">
                    <h1 className="text-3xl font-bold text-center mb-4"> About me 🫨 </h1>
                </div>
                <div className="flex flex-col justify-center p-0 w-full max-w-[800px]">
                    <p> {riccardoData.description} </p>
                </div>
            </section>
        </>
    );
}