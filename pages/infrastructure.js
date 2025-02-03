const Infrastructure = () => {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Infrastructure</h1>
            <p className="text-lg md:text-xl">
              Explore our world-class facilities designed to foster learning,
              creativity, and growth.
            </p>
          </div>
        </section>
  
        {/* Facilities Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are proud to offer modern facilities to support academic
              excellence, extracurricular activities, and holistic development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Facility 1 */}
              <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="/Library.png"
                  alt="Library"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Modern Library
                </h3>
                <p className="text-gray-600">
                  A well-stocked library with thousands of books, e-resources, and
                  study areas.
                </p>
              </div>
              {/* Facility 2 */}
              <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="/Science Lab.png"
                  alt="Science Lab"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Advanced Science Labs
                </h3>
                <p className="text-gray-600">
                  Fully equipped labs for physics, chemistry, and biology to
                  encourage hands-on learning.
                </p>
              </div>
              {/* Facility 3 */}
              <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="/sports.png"
                  alt="Sports Ground"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Sports Ground
                </h3>
                <p className="text-gray-600">
                  Expansive sports grounds for football, cricket, basketball, and
                  other activities.
                </p>
              </div>
              {/* Facility 4 */}
              <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="/Science Lab.png"
                  alt="Computer Lab"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Computer Lab
                </h3>
                <p className="text-gray-600">
                  Fully equipped labs for physics, chemistry, and biology to
                  encourage hands-on learning.
                </p>
              </div>
              {/* Facility 5 */}
              <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="/Science Lab.png"
                  alt="Activity Room"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Interactive Activity Room
                </h3>
                <p className="text-gray-600">
                  Fully equipped labs for physics, chemistry, and biology to
                  encourage hands-on learning.
                </p>
              </div>
              {/* Facility 6 */}
              <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="/Science Lab.png"
                  alt="Music Room"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Music and Dance Room
                </h3>
                <p className="text-gray-600">
                  Fully equipped labs for physics, chemistry, and biology to
                  encourage hands-on learning.
                </p>
              </div>
            </div>
          </div>
        </section>
  
      </div>
    );
  };
  
  export default Infrastructure;
  