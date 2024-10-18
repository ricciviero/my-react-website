export default function About({ riccardoData }) {

    return (
        <>
            <section className="about">
                <div className="about-title">
                    <h1> About me 🫨 </h1>
                </div>
                <div className="about-description">
                    <p> {riccardoData.description} </p>
                </div>
            </section>
        </>
    );
}