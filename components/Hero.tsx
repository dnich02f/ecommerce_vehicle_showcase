"use client"
import Image from 'next/image';
import {CustomButton} from "@/components/index";

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, Book, or Rent a Vehicle -- quickly and easily
                </h1>

                <p className="hero__subtitle">
                    Streamline your vehicle rental experience with our effortless booking experience.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />

                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/hero2.png" alt="hero" fill className="object-contain"/>
                        <div className="hero__image-overlay"></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero;