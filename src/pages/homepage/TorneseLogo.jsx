import React from 'react';

const TorneseLogo = ({ size = 'medium', showText = true, className = '', speed = '3s' }) => {
    const sizes = {
        small: { svg: 'w-16 h-16', text: 'text-2xl' },
        medium: { svg: 'w-24 h-24', text: 'text-3xl' },
        large: { svg: 'w-32 h-32', text: 'text-4xl' },
        xlarge: { svg: 'w-48 h-48', text: 'text-5xl' }
    };

    const currentSize = sizes[size] || sizes.medium;
    const colorTornese = className.includes('footer') ? 'text-white' : 'text-gray-900';

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* LOGO SVG */}
            <div className="flex items-center justify-center" style={{ perspective: '800px' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="1700 850 600 600"
                    xmlSpace="preserve"
                    className={`${currentSize.svg} block`}
                >
                    <style type="text/css">
                        {`.st0{fill:#030305;}.st1{fill:#0073E6;}.st2{fill:#FFFFFF;}.st3{fill:none;}
                          /* coin spin: la durata viene impostata dinamicamente via prop 'speed' */
                          .coin{transform-box:fill-box;transform-origin:50% 50%;transform-style:preserve-3d;}
                          @keyframes spinY{from{transform:rotateY(0deg);}to{transform:rotateY(360deg);}}`}
                    </style>
                    <g>
                        <g>
                            <g className="coin" style={{ animation: `spinY ${speed} linear infinite` }}>
                                <circle className="st1" cx="2000" cy="1136.32" r="258.42" />
                                <g>
                                    <g>
                                        <path className="st2" d="M2040.02,1015.67c0,0-23.2,3.48-33.64,25.52c0,0-12.76-17.4-37.12-25.52h-97.45l26.68,44.08h47.56
						c0,0,30.16,8.12,30.16,32.48v163.18h52.2v-167.82c0,0,1.16-24.36,25.52-27.84h48.72l25.52-44.08H2040.02z"/>
                                        <polygon className="st2" points="1899.65,1256.97 1943.73,1217.52 1943.73,1085.27 1899.65,1085.27" />
                                        <polygon className="st2" points="2057.42,1217.52 2101.51,1256.97 2101.51,1085.27 2057.42,1085.27" />
                                    </g>
                                </g>
                            </g>
                        </g>
                        <rect className="st3" width="4000" height="2416" />
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
