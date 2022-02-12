import React from 'react';
import PropTypes from 'prop-types';

const UTA = (props) => {
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
      <title id="title">Utah Jazz</title>
      <defs>
        <path id="A_UTA" d="M120.346 80.052V.086H0v79.966h120.345z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(15 34.195)">
          <mask id="B_UTA" fill="#fff">
            <use xlinkHref="#A_UTA" />
          </mask>
          <path
            d="M43.604 43.647L62.607.085h57.74l-10.462 23.993h-48.77L47.3 55.763v1.12c0 10.094-8.52 23.168-23.655 23.168C10.608 80.052 0 69.423 0 56.372c0-13.06 10.608-23.676 23.643-23.676 8.23 0 15.94 4.444 19.96 10.95"
            fill="#fefefe"
            mask="url(#B_UTA)"
          />
        </g>
        <path
          d="M16.415 91.623c.274 5.87 2.815 11.13 6.75 14.962 4.187-3.703 6.928-9.013 7.22-14.962h-13.97z"
          fill="#0b223e"
        />
        <path
          d="M32.346 91.623c-.292 6.45-3.212 12.223-7.706 16.27 3.582 2.915 8.094 4.748 13.035 4.963V91.623h-5.33z"
          fill="#f9a11a"
        />
        <path
          d="M16.407 89.672H30.4c-.25-6.018-2.994-11.396-7.226-15.12-3.97 3.864-6.52 9.192-6.758 15.12"
          fill="#0b223e"
        />
        <path
          d="M24.64 73.244c4.536 4.076 7.46 9.91 7.706 16.428h5.33v-21.4a22.09 22.09 0 0 0-13.035 4.972"
          fill="#f9a11a"
        />
        <path
          d="M60.883 91.623H46.917c.292 5.95 3.03 11.26 7.217 14.962 3.94-3.832 6.474-9.09 6.75-14.962"
          fill="#0b223e"
        />
        <path
          d="M44.96 91.623h-5.332v21.233c4.94-.215 9.448-2.05 13.038-4.963-4.494-4.047-7.417-9.82-7.706-16.27m7.705-18.38a22.11 22.11 0 0 0-13.038-4.972v21.4h5.326c.248-6.52 3.18-12.352 7.712-16.428"
          fill="#2b5134"
        />
        <path
          d="M78.527 35.69L58.755 81.038a22.43 22.43 0 0 0-4.619-6.483c-4.23 3.724-6.975 9.103-7.223 15.12H60.9l14.297-32.81h41.77l9.23-21.177h-47.66z"
          fill="#0b223e"
        />
        <path
          fill="#2b5134"
          d="M123.964 56.864l9.233-21.177h-3.937l-9.23 21.177z"
        />
      </g>
    </svg>
  );
};

UTA.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UTA.defaultProps = {
  size: '100',
};

export default UTA;
