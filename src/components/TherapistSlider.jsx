import React, { useState, useEffect } from 'react';
import TherapistCard from './TherapistCard'; // Import your existing TherapistCard component
import { therapists } from '../constants/therapistCardsData'; // Import therapist data
import Button from './Button'; // Importing the Button component
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Import arrow icons



const TherapistSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); // Default to show 4 cards

    // Update the number of cards per page based on the window size
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1); // 1 item per page on mobile
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2); // 2 items per page on tablet
            } else {
                setItemsPerPage(4); // 4 items per page on desktop
            }
        };

        // Initial check
        updateItemsPerPage();

        // Set up listener for window resize
        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === therapists.length - itemsPerPage ? 0 : prevIndex + 1
        );
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? therapists.length - itemsPerPage : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Header Section */}
            <div className="content flex flex-col items-center justify-center flex-wrap my-8">
                <p className="text-center text-xl mb-3 text-[#ff674f]">
                    FEATURED THERAPISTS
                </p>
                <p className="text-center text-2xl sm:text-4xl font-bold text-[#1d7e7c]">
                    Connect with our top-rated therapists
                </p>
            </div>

            {/* Slider Section */}
            <div className="overflow-hidden relative w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                    }}
                >
                    {therapists.map((therapist, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-2"
                            style={{
                                width: `${100 / itemsPerPage}%`,
                            }}
                        >
                            <TherapistCard {...therapist} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center w-auto px-4 py-5 gap-4">
                <div onClick={handlePrevClick}>
                    <Button
                        className="flex items-center justify-center w-12 h-12 text-[#1d7e7c]"
                        title={<AiOutlineLeft className="w-8 h-8" />}
                    />
                </div>
                <div onClick={handleNextClick}>
                    <Button
                        className="flex items-center justify-center w-12 h-12 text-[#1d7e7c]"
                        title={<AiOutlineRight className="w-8 h-8" />}
                    />
                </div>
            </div>
        </div>
    );
};

export default TherapistSlider;
