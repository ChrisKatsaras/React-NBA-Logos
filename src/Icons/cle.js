import React from 'react';
import PropTypes from 'prop-types';

const CLE = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      fill-rule="evenodd"
    >
      <path
        d="M97.318 49.745c-1.427-.147-4.48.65-9.208 2.637-7.055 2.965-15.396 9.227-20.704 14.925-5.7 6.11-16.993 20.238-16.84 26.807 0 .23.17 1.1 1.12 1.458l.416.13c3.44.794 8.264.263 18.77-3.008 0 0 16.046-4.862 35.994-13.6l5.745-3.196-2.943 14.842-.344.298c-14.79 12.845-37.674 24.92-57.05 25.828-4.48.208-9.7-.02-14.32-1.863-6.07-2.42-9.816-6.11-11.454-10.72-.656-1.33-6.225-14.14 9.36-33.7l-10.15 2.51 8.16-12.63c16.52-13.664 65.144-42.025 87.853-20.427l1.767 1.797v7.23L87.467 69.835c.326-.597 7.89-15.52 7.89-15.52.936-1.837 1.574-3.346 1.96-4.57"
        stroke="#fff"
        fill="#fcb61a"
        strokeLinecap="round"
      />
      <g fill="#000840">
        <path d="M98.552 47.3c-2.328-.75-6.54.562-11.46 2.64-7.464 3.136-16.1 9.635-21.62 15.554C60.113 71.266 47.73 86.3 47.92 94.18a8.89 8.89 0 0 0 .083.978c-1.194-1-1.92-2.428-1.978-4.5-.187-7.9 12.2-22.907 17.543-28.663 5.516-5.92 14.168-12.418 21.626-15.56 7.723-3.256 13.695-4.644 13.357.877m22.517-4.318l.057 4.66L93.75 64.218c.3-.298 3.38-6.267 3.567-6.692l23.75-14.532z" />
        <path d="M40.352 66.757l-8.435 2.064 3.66-4.977 9.453-2.177-4.68 5.1m67.246 22.275c-14.537 12.624-36.873 24.312-55.445 25.2-4.35.2-9.13-.054-13.2-1.693-5.574-2.22-8.662-5.444-9.98-9.222 1.715 2.27 4.335 4.2 8.078 5.714 4.1 1.62 8.87 1.883 13.22 1.672 20.04-.93 44.453-14.466 58.727-28.183l-1.392 6.52z" />
      </g>
      <path
        d="M119.875 41.924L97.7 55.515c9.517-18.644-7.622-14.27-19.07-7.53-6.51 3.42-13.975 10.347-16.316 12.842-19.046 20.28-32.386 47.383 9.318 34.402 0 0 16.2-4.908 36.333-13.754-56.963 48.12-110.73 27.998-57.824-22.592-4.815 1.1-9.676 2.147-14.432 3.477 16.94-14.018 63.412-40.17 84.156-20.435"
        fill="#690031"
      />
    </svg>
  );
};

CLE.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CLE.defaultProps = {
  size: '24'
};

export default CLE;
