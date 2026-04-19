const Contact = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out mt-20">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        
        {/* Message Input */}
        <div>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
