import React from "react";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa"; // Import heart icon

const TherapistCard = ({ image, name, role, description }) => {
    // Function to truncate description to 20 words
    const truncatedDescription = description.split(" ").slice(0, 10).join(" ") + (description.split(" ").length > 20 ? "..." : "");

    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-3 h-full">
            <div className="relative">
                <img
                    className="w-full h-56 object-cover" // Ensure image has fixed height
                    src={image} // Use the image prop
                    alt={name} // Use the name prop for accessibility
                />
            </div>
            <div className="p-4 flex flex-col h-full">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                        <p className="text-sm text-gray-500 mb-2">{role}</p>
                    </div>
                    <div className="flex items-center mb-6 pl-3">
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <FaStar key={index} className="w-5 h-5 text-yellow-500" />
                            ))}
                        <FaRegStar className="w-5 h-5 text-gray-300" />
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{truncatedDescription}</p>
                <div className="flex">
                    <button className="w-[75%] bg-[#1D7E7C] text-white text-sm font-medium py-2 rounded-md">
                        Book therapist
                    </button>
                    <button className="ml-4 w-[20%] flex items-center justify-center p-2 rounded-md">
                        <FaHeart className="w-5 h-5 text-red-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TherapistCard;
