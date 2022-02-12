import React from 'react';
import PropTypes from 'prop-types';

const LAC = (props) => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
      role="img"
      aria-describedby='title'
    >
      <title id="title">Los Angeles Clippers</title>
      <defs>
        <path id="A_LAC" d="M0 100h100V0H0z" />
      </defs>
      <g transform="translate(25 25)" fillRule="evenodd">
        <path
          d="M0 50C0 22.386 22.386 0 50 0s50 22.386 50 50-22.386 50-50 50S0 77.614 0 50"
          fill="#fff"
        />
        <path
          d="M84.363 76.412c-5.447-7.064-8.54-15.462-8.963-24.33h17.913c-.423 8.873-3.512 17.273-8.95 24.33m-32.28 16.9V80.89h-4.167v12.42c-11.284-.537-21.748-5.376-29.518-13.652 6.35-7.93 9.933-17.455 10.37-27.577v-4.167c-.44-10.12-4.02-19.647-10.37-27.577 7.77-8.277 18.235-13.116 29.518-13.652v12.3h4.167v-12.3c11.284.536 21.75 5.376 29.52 13.652-6.35 7.93-9.933 17.455-10.37 27.577v4.167c.44 10.12 4.02 19.647 10.37 27.577-7.77 8.277-18.236 13.115-29.52 13.652m-36.446-16.9a42.98 42.98 0 0 1-8.95-24.329H24.6c-.422 8.866-3.517 17.265-8.963 24.33m0-52.824c5.447 7.064 8.54 15.463 8.963 24.33H6.688a42.98 42.98 0 0 1 8.95-24.329m68.726 0a42.99 42.99 0 0 1 8.95 24.329H75.4c.422-8.865 3.516-17.264 8.963-24.33M50 2.462C23.788 2.462 2.462 23.788 2.462 50S23.788 97.538 50 97.538 97.538 76.213 97.538 50 76.213 2.462 50 2.462"
          fill="#061922"
        />
        <path fill="#c8102e" d="M39.83 30.17v39.66h21.2v-5.453H45.5V30.17z" />
        <path
          d="M68.222 43.457V27.115c0-2.45-.986-3.448-3.403-3.448H35.976c-2.386 0-3.36 1-3.36 3.448v45.93c0 2.448.974 3.447 3.36 3.447H64.82c2.417 0 3.403-1 3.403-3.447v-16.36h-5.715v14.792H38.288V28.683h24.218v14.774h5.715z"
          fill="#1d428a"
        />
        <mask id="B_LAC" fill="#fff">
          <use xlinkHref="#A_LAC" />
        </mask>
        <path
          d="M52.72 47.224h2.762V35.622H52.72v11.602zm8.29 15.618l.01-32.673H47.25l-.134 32.673h5.513l.09-10.186h2.803l-.04 10.186h5.528z"
          fill="#c8102e"
          mask="url(#B_LAC)"
        />
      </g>
    </svg>
  );
};

LAC.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LAC.defaultProps = {
  size: '100',
};

export default LAC;
