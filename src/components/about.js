import Introduction from "../Helpers/introduction";
import Meteors from "../Helpers/meteors";

function About() {
    return (
        <>
            <div className="relative h-[50rem] w-full">
                <div
                    className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
                <div
                    className="relative flex h-full flex-col justify-center overflow-hidden rounded border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">

                    <Introduction />

                </div>

                <Meteors />
            </div>
        </>
    )
}

export default About;