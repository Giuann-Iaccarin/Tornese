import React from 'react';

const TorneseLogo = ({ size = 'medium', showText = true, className = '' }) => {
    const sizes = {
        small: { svg: 'w-8 h-8', text: 'text-lg' },
        medium: { svg: 'w-12 h-12', text: 'text-2xl' },
        large: { svg: 'w-16 h-16', text: 'text-3xl' },
        xlarge: { svg: 'w-24 h-24', text: 'text-4xl' }
    };

    const currentSize = sizes[size] || sizes.medium;
    const colorTornese = className.includes('footer') ? 'text-white' : 'text-gray-900';

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* LOGO SVG centrato */}
            <div className="flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="1700 900 570 450"
                    className={`${currentSize.svg} block`}
                >
                    <circle fill="#0073E6" cx="1985.51" cy="1127.32" r="285.1" />
                    <g>
                        <rect x="1848.61" y="1027.5" fill="#FFFFFF" width="273.79" height="42.21" />
                        <path
                            fill="#FFFFFF"
                            d="M1915.67,1098.55h-67.06v42.21h67.06c5.31,0,9.62,4.3,9.62,9.62v71.14
                            c0,23.31,18.9,42.21,42.21,42.21v-113.35
                            C1967.5,1121.76,1944.3,1098.55,1915.67,1098.55z"
                        />
                        <path
                            fill="#FFFFFF"
                            d="M2002.05,1150.38v113.35c23.31,0,42.21-18.9,42.21-42.21v-71.14
                            c0-5.31,4.3-9.61,9.61-9.61h67.06v-42.21h-67.06
                            C2025.25,1098.55,2002.05,1121.76,2002.05,1150.38z"
                        />
                    </g>
                </svg>
            </div>

            {/* Testo a fianco */}
            {showText && (
                <div className="flex flex-col justify-center">
                    <span className={`${currentSize.text} font-bold ${colorTornese} leading-none`}>
                        TORNESE
                    </span>
                </div>
            )}
        </div>
    );
};

export default TorneseLogo;
