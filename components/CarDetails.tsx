import React from 'react';
import {CarProps} from "@/types";


export interface CarDetailsProps {
    isOpen?: boolean,
    car?: CarProps,
    closeModal: () => void;
}

const CarDetails = ({isOpen, car, closeModal}: CarDetailsProps ) => {
    return (
        <div>
            CarDetails
        </div>
    )
}

export default CarDetails;
