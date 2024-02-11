import React from 'react'
import { twMerge } from 'tailwind-merge'

interface VersionIconProps {
    width?: string;
    height?: string;
    className?: string;
}

const VersionIcon: React.FC<VersionIconProps> = (props) => {

    const { width, height, className } = props;

    return (
        <>
  


            <svg width={width} height={height} className={twMerge(className)} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5Z" fill="#CDCDCD" />
                <path d="M12 10.75C12.41 10.75 12.75 11.09 12.75 11.5V16.5C12.75 16.91 12.41 17.25 12 17.25C11.59 17.25 11.25 16.91 11.25 16.5V11.5C11.25 11.09 11.59 10.75 12 10.75Z" fill="#060307" />
                <path d="M12.92 8.88C12.87 9 12.8 9.11 12.71 9.21C12.61 9.3 12.5 9.37 12.38 9.42C12.14 9.52 11.86 9.52 11.62 9.42C11.5 9.37 11.39 9.3 11.29 9.21C11.2 9.11 11.13 9 11.08 8.88C11.03 8.76 11 8.63 11 8.5C11 8.37 11.03 8.24 11.08 8.12C11.13 7.99 11.2 7.89 11.29 7.79C11.39 7.7 11.5 7.62999 11.62 7.57999C11.74 7.52999 11.87 7.49999 12 7.49999C12.13 7.49999 12.26 7.52999 12.38 7.57999C12.5 7.62999 12.61 7.7 12.71 7.79C12.8 7.89 12.87 7.99 12.92 8.12C12.97 8.24 13 8.37 13 8.5C13 8.63 12.97 8.76 12.92 8.88Z" fill="#060307" />
            </svg>


        </>

    );
};

export default VersionIcon;
