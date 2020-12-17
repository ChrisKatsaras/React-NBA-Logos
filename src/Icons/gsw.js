import React from 'react';
import PropTypes from 'prop-types';

const GSW = (props) => {
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
    >
      <defs>
        <path id="A_GSW" d="M99.807.192H0V100.21h99.807V.192z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(25 25.039)">
          <mask id="B_GSW" fill="#fff">
            <use xlinkHref="#A" />
          </mask>
          <path
            d="M49.905.192C22.388.192-.001 22.627-.001 50.204s22.388 50.007 49.905 50.007 49.902-22.432 49.902-50.007S77.42.192 49.905.192"
            fill="#fefefe"
            mask="url(#B)"
          />
        </g>
        <path
          d="M74.905 26.602c-26.813 0-48.537 21.782-48.537 48.64S48.09 123.88 74.905 123.88c26.805 0 48.534-21.777 48.534-48.635s-21.73-48.64-48.534-48.64"
          fill="#0f4b90"
        />
        <path
          d="M112.106 92.83c-7.383-1.656-14.222-4.2-20.462-7.196l-2.84-1.43c-4.567-2.372-8.78-4.98-12.6-7.646l-2.27-1.62c-.05-.033-.093-.07-.137-.1-.985-.72-1.935-1.442-2.863-2.164-1.51-1.176-2.947-2.345-4.305-3.496-1.574-1.336-3.04-2.646-4.395-3.908a125.92 125.92 0 0 1-3.325-3.2l-.632-.636c-1.61-1.632-3-3.126-4.132-4.393l-.08-2.548-.085-2.923-1.3-.6-.903.8-.307.266.04 1.942-.676-.84-.027-3.096H49l-.033 1.072-1.084.27-.11 5.904c-2.583 5.915-5.287 10.607-7.728 14.235-1.237 1.837-2.408 3.398-3.46 4.703-1.218 1.506-2.282 2.677-3.106 3.518-.153-1.06-.26-2.136-.33-3.22-.066-.938-.107-1.88-.107-2.836a41.06 41.06 0 0 1 .107-2.852c.65-9.702 4.584-18.503 10.714-25.284 1.33-1.473 2.77-2.852 4.294-4.122 6.598-5.498 14.912-8.995 24.017-9.576a42.13 42.13 0 0 1 2.707-.099c1.06 0 2.104.055 3.144.132 9.16.68 17.487 4.314 24.058 9.955 1.46 1.253 2.832 2.602 4.108 4.042 5.88 6.647 9.682 15.18 10.396 24.574.082 1.07.134 2.145.134 3.23 0 .787-.027 1.566-.068 2.34a41.8 41.8 0 0 1-4.546 16.8zm-77.652-8.318c-.167-.628-.317-1.26-.454-1.898l1.48-2.114-1.026 4.012zm4.376-8.457L36.36 90.087c-.476-1.127-.903-2.284-1.28-3.46l1.853-8.293 1.46-2.246.597-.935-.16.902zm7.887-11.334l-5.892 33.317c-.602-.842-1.18-1.698-1.716-2.583l3.478-19.65.717-4.03.602-3.42.424-2.39c1.182-2.22 2.33-4.547 3.39-6.924l-1.004 5.68zm19.5 7.934l.712 2.25 6.576 20.8-2.665.18L60.96 64.4l1.363 1.322 2.425 2.298 1.47 4.635zm3.49.022L76.932 95.5l-2.518.148-8.317-26.387 3.508 3.115.1.3zm14.5 22.468l-2.605.1-5.53-17.57c.052.044.104.077.156.118l3.237 2.457 4.743 14.885zm7.348-.208l-2.82.063-3.358-10.594c1.26.83 2.468 1.604 3.642 2.323l2.534 8.208zm7.28-2.87c3.213 1.51 5.64 2.408 7.123 2.9l-6.234-.088-.89-2.803zm-4.346-2.19a88.94 88.94 0 0 0 3.246 1.665l1.054 3.33-.95.003-1.787.003-1.563-5zm-4.316-2.452c1.106.664 2.176 1.278 3.19 1.84l1.76 5.622-1.442.02-1.193.014-1.606-5.194-.71-2.3zm-5.947-3.8c.052.03.096.066.148.1l-.13-.038 3.574 11.33-2.696.088-4.362-13.898c1.185.856 2.334 1.654 3.46 2.413l.02.063.005.003-.02-.06zm-13.38-10.207l1.7 1.42 1.385 1.127.84.68 1.55 4.884 4.368 13.756-2.832.145-1.11-3.496-5.897-18.516zm28.497 28.967c-4.912-.24-12.08-.447-21.975-.44l-4.034.016-10.115.13 10.123-.354 4-.088c8.136-.154 15.615-.13 21.307-.06l7.353.13c-.312.346-.635.683-.958 1.017-1.398-.107-3.284-.233-5.703-.35zm-42.902 1.2l16.828-.178 4.21.025c8.2.08 16.63.348 23.718.976l1.98.184c-.312.29-.638.565-.96.845-7.33 6.346-16.877 10.193-27.325 10.193a41.59 41.59 0 0 1-17.624-3.902c-.293-2.246-.57-5.016-.824-8.142zm-3.02 6.102c-.326-.192-.643-.398-.96-.6l-.323-5.394.94-.027.342 6.022zm2.203-18.157l-.432-8.104 4.253 13.407-3.473.354-.044-.655-.304-5.002zm-.925-19.144l-.07-1.714.545 1.733.865 2.767 6.688 21.357-2.373.22-5.336-17-.2-4.533-.118-2.83zm-9.772 26.113l2.452-13.88-.08 13.572-2.373.307zm2.43 6.757a36.84 36.84 0 0 1-1.483-1.368l1.46-.05.022 1.418zm-1-33.278l1.308-7.4-.118 7.478-.107 7.923-.123-.022-3.31 18.678-2.433.34 4.132-23.337.65-3.65zm9.474-12.782l1.645 1.706 1.954 1.983.287.908 10.23 32.154-2.572.192L55.81 59.192zm-1.667-1.758l.213.222 12.096 38.552-2.832.236-2.82-9.102-6.322-20.365-.334-9.543zm-3.306-3.61l.68.75.15 6.1.394 14.636.74 22.207-.952.1-.066-1.706-.597-20.576-.063-3.124-.192-11.126-.093-7.28zm-9.7 17.787L43 68.406l-.252 1.453-.326 1.85-3.952 22.633c-.542-.954-1.048-1.93-1.513-2.932l3.205-18.157.353-.587.632-1.056zM74.88 28.958c-24.662 0-44.656 20.027-44.656 44.744S50.217 118.45 74.88 118.45c12.54 0 23.86-5.183 31.972-13.522.274-.145.6-.54.887-.932a44.63 44.63 0 0 0 11.789-30.292c0-24.717-19.986-44.744-44.648-44.744z"
          fill="#fec42f"
        />
        <path
          d="M33.042 73.692l.107 2.833 3.437-.3 3.46-4.703-6.896-.683-.107 2.852m83.678 0l-.134-3.23c-9.97.94-19.255 1.522-27.744 1.85.43-6.554 3.585-12.46 8.048-18.2 3.607-4.64 7.405-7.163 9.3-8.235a41.79 41.79 0 0 0-4.108-4.045c-3.262 3.228-13.92 14.93-14.68 30.53l-11.26.27c-.216-24.316 1.69-39.317 1.883-40.754-1.04-.077-2.083-.13-3.144-.13-.91 0-1.81.04-2.707.096.205 1.955 1.672 16.874 1.743 40.81l-2.99.01 2.863 2.164h.137v.1c.736.543 1.497 1.083 2.27 1.62l-.027-1.725 11.206.1c.063 2.978.5 6.083 1.43 9.283l2.84 1.43c-1.782-3.782-2.674-7.322-2.83-10.684 8.514.16 17.835.494 27.837 1.078.04-.773.068-1.55.068-2.336M48.156 41.43a42.11 42.11 0 0 0-4.294 4.124c1.08.562 3.47 1.955 6.185 4.49h.753l.005.73c.317.318.64.647.963.995l.903-.787 1.3.587.085 2.926c1.877 2.446 3.51 4.928 4.795 7.478l3.314 3.077c-3.13-12.574-11.8-21.505-14.01-23.62"
          fill="#fefefe"
        />
      </g>
    </svg>
  );
};

GSW.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GSW.defaultProps = {
  size: '100',
};

export default GSW;
