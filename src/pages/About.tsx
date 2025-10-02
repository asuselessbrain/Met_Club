
const About = () => {
    return (
        <div>
            <div className="relative flex flex-col items-center space-y-16">
                {/* Card 1 */}
                <div className="relative bg-gray-800 text-white p-6 rounded-xl shadow-lg w-80">
                    <h2 className="font-bold">Mission 1</h2>
                    <p>Be a Typescript Technocrat</p>

                    {/* Dotted line connector */}
                    <div className="absolute top-full left-1/2 w-0 h-16 border-l-2 border-dashed border-blue-400"></div>
                </div>

                {/* Card 2 */}
                <div className="relative bg-gray-800 text-white p-6 rounded-xl shadow-lg w-80">
                    <h2 className="font-bold">Mission 2</h2>
                    <p>Be a RDBMS Rockstar</p>
                </div>
            </div>

        </div>
    );
};

export default About;