import SocialMenu from "./components/Social Media Menu";

const EventsGallery = () => {

  const myArray = ['Photo 1.JPG', 'Photo 2.JPG', 'Photo 3.JPG', 'Photo 4.JPG', 'Photo 5.JPG', 'Photo 6.JPG', 'Photo 7.JPG',
    'Photo 8.JPG', 'Photo 9.JPG', 'Photo 10.JPG', 'Photo 11.JPG', 'Photo 12.JPG', 'Photo 13.JPG', 'Photo 14.JPG'
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500   text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events Gallery</h1>
          <p className="text-lg md:text-xl">
            Explore the vibrant activities and events our students participate
            in throughout the year.
          </p>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Highlights of Our Year
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            From academic achievements to extracurricular activities, our
            students shine in every aspect. Here are some memorable moments.
          </p>

          {/* Annual Function */}

          <h3 className="text-2xl font-bold mb-8 text-purple-900"> Annual Function</h3>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

            {myArray.map((item) => (
              <div className="p-1 bg-gray-100 border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={`/annual-function/` + item}
                  alt="Annual Function"
                  className="rounded-lg"
                />

              </div>
            )
            )}


          </div>

        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-purple-900"> Recent Activities</h3>
          <p className="text-lg text-gray-600 mb-6">
            A visual journey through the year's most exciting moments captured
            in photos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="flex flex-col border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="/recent-activities/pot decoration.jpg"
                alt="Pot Decoration"
              />
              <h1 className="text-xl font-bold m-3"> Pot Decoration Activity           </h1>
            </div>

             {/* Image 2 */}
             <div className="flex flex-col border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="/recent-activities/rangoli.jpg"
                alt="Rangoli"
              />
              <h1 className="text-xl font-bold m-3"> Rangoli Activity           </h1>
            </div>

             {/* Image 3 */}
             <div className="flex flex-col border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="/recent-activities/dussehra.jpg"
                alt="Dussehra Activity"
              />
              <h1 className="text-xl font-bold m-3"> Dussehra Activity  </h1>
            </div>


          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Events
          </h2>
          <p className="text-lg mb-6">
            Follow us for more updates on upcoming events and activities
            happening in our school.
          </p>
          
          <SocialMenu />
        </div>
      </section>
    </div>
  );
};

export default EventsGallery;
