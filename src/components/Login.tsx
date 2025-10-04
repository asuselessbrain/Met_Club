import { Link } from "react-router";

const Login = () => {
    return (
        <div className="w-full max-w-md p-6 sm:p-8 lg:p-4 xl:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg space-y-4 md:space-y-6 mx-auto">
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
                লগইন করুন
            </h1>

            <form className="space-y-4 md:space-y-6 lg:space-y-2 xl:space-y-6">
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                        আইডি / নাম
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="আপনার আইডি লিখুন"
                        required
                        className="bg-white/90 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        পাসওয়ার্ড
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        required
                        className="bg-white/90 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <div className="flex items-center justify-end">
                    <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                        পাসওয়ার্ড ভুলে গেছেন?
                    </p>
                </div>

                <Link to="/basicMap">
                    <button
                        type="submit"
                        className="w-full text-white cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        লগইন
                    </button>
                </Link>

                <p className="text-sm font-light text-gray-600 text-center mt-6">
                    অ্যাকাউন্ট নেই? <span className="font-medium text-blue-600 hover:underline cursor-pointer">নিবন্ধন করুন</span>
                </p>
            </form>
        </div>

    );
};

export default Login;
