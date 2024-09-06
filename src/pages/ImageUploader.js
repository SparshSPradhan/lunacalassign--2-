// // src/components/ImageUploader.js
// import React, { useState } from 'react';

// const ImageUploader = () => {
//   // State to store uploaded images
//   const [images, setImages] = useState([]);

//   // Function to handle image uploads
//   const handleImageUpload = (event) => {
//     const files = event.target.files;
//     if (files) {
//       const imageFiles = Array.from(files).filter(file =>
//         file.type.startsWith('image/')
//       );

//       if (imageFiles.length !== files.length) {
//         alert('Only image files are allowed!');
//       }

//       const imageUrls = imageFiles.map(file => ({
//         url: URL.createObjectURL(file),
//         name: file.name,
//       }));

//       setImages(prevImages => [...prevImages, ...imageUrls]);
//     }
//   };

//   // Function to remove an image
//   const removeImage = (name) => {
//     setImages(prevImages => prevImages.filter(image => image.name !== name));
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
//       {/* Add Image Button */}
//       <div className="mb-6">
//         <label
//           htmlFor="file-upload"
//           className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//         >
//           + Add Image
//         </label>
//         <input
//           id="file-upload"
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleImageUpload}
//           className="hidden"
//         />
//       </div>

//       {/* Image Gallery */}
//       <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Gallery</h2>
//         {images.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative group overflow-hidden rounded-lg"
//               >
//                 <img
//                   src={image.url}
//                   alt={image.name}
//                   className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Overlay on Hover */}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
//                   <button
//                     onClick={() => removeImage(image.name)}
//                     className="opacity-0 group-hover:opacity-100 bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-400">No images uploaded yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;





import React, { useState } from 'react';

const ImageUploader = () => {
  // State to store the list of uploaded images
  const [images, setImages] = useState([]);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        {/* Add Image Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Image Gallery</h2>
          {/* Add Image button, which opens file picker */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            + Add Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Display uploaded images */}
        <div className="grid grid-cols-3 gap-4">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className="relative group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No images uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
