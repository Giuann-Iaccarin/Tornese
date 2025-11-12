import React from 'react';

const TorneseLogo = ({ size = 'medium', showText = true, className = '' }) => {
    // Dimensioni predefinite
    const sizes = {
        small: { svg: 'w-8 h-8', text: 'text-lg' },
        medium: { svg: 'w-12 h-12', text: 'text-2xl' },
        large: { svg: 'w-16 h-16', text: 'text-3xl' },
        xlarge: { svg: 'w-24 h-24', text: 'text-4xl' }
    };

    const currentSize = sizes[size] || sizes.medium;

    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            {/* Logo SVG */}
            <svg
                viewBox="1700 800 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className={currentSize.svg}
            >
                {/* Cerchio blu */}
                <circle fill="#0073E6" cx="2000" cy="1136.32" r="258.42" />

                {/* Simbolo T bianco */}
                <g fill="#FFFFFF">
                    <path d="M2040.02,1015.67c0,0-23.2,3.48-33.64,25.52c0,0-12.76-17.4-37.12-25.52h-97.45l26.68,44.08h47.56
              c0,0,30.16,8.12,30.16,32.48v163.18h52.2v-167.82c0,0,1.16-24.36,25.52-27.84h48.72l25.52-44.08H2040.02z"/>
                    <polygon points="1899.65,1256.97 1943.73,1217.52 1943.73,1085.27 1899.65,1085.27" />
                    <polygon points="2057.42,1217.52 2101.51,1256.97 2101.51,1085.27 2057.42,1085.27" />
                </g>
            </svg>

            {/* Testo (opzionale) */}
            {showText && (
                <div>
                    <span className={`${currentSize.text} font-bold text-gray-900 dark:text-white`}>
                        TORNESE
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                        Foundation
                    </p>
                </div>
            )}
        </div>
    );
};

export default TorneseLogo;

// Esempi di utilizzo:
// <TorneseLogo size="small" />
// <TorneseLogo size="medium" showText={true} />
// <TorneseLogo size="large" showText={false} />
// <TorneseLogo size="xlarge" className="my-custom-class" />