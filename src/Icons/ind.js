import React from 'react';
import PropTypes from 'prop-types';

const IND = props => {
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
        <path id="A" d="M99.998.038H.001V92.93h99.997V.038z" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(25 28.06)">
          <mask id="B" fill="#fff">
            <use xlinkHref="#A" />
          </mask>
          <path
            d="M92.078 12.997C85.172 4.658 75.266.057 64.18.037L20.415.04.001 92.908l39.515.022 5.203-21.695 16.767.003c12.46 0 22.72-4.307 29.635-12.427 12.797-13.95 10.537-34.247.957-45.815"
            fill="#fefefe"
            mask="url(#B)"
          />
        </g>
        <path
          d="M115.847 42.08c-6.58-7.944-16.053-12.363-26.67-12.38l-42.477.003-19.706 89.66 36.26.026 5.203-21.698 17.66.003c12.15.087 22.114-4.028 28.825-11.908 12.186-13.28 10.044-32.67.906-43.707"
          fill="#b3b1b1"
        />
        <path
          d="M66.6 95.328l-5.203 21.695-31.473.013L48.6 32.064l40.57.03c10.1.016 18.755 4.118 24.86 11.495 9 10.867 9.877 28.93-.887 40.67-6.602 7.75-16.28 11.152-27.006 11.075L66.6 95.328z"
          fill="#081e3f"
        />
        <path
          d="M44.42 50.94l17.782.016c2.043 0 4.217 1.714 3.272 4.313a24.14 24.14 0 0 0-1.233 5.214c-.163 1.365 1.36 2.227 2.232 2.227l36.243.026c.682 0 1.04-.192 1.04-.52s-.032-1.525-.16-2.368c-.128-.804-.26-.942-.9-.942-4.518-.006-6.36-2.02-11.094-5.076S79.912 49.017 73.944 49l-29.094-.016-.432 1.945zm21.953 23.5a24.46 24.46 0 0 1-1.562-4.413c-.448-1.884-2.04-3.416-4.76-3.416H40.974l.474-2.14 61.815.042c.618 0 .487.26.455.942s-.192 1.948-.3 2.695-.714.567-1.303.58c-1.4.032-3.976.362-5.484 1.493-2.56 1.926-8.023 5.3-11.094 6.294-3.295 1.05-15.605 4.82-19.2-2.125m-28.79 7.794l32.28.022c1.425 0 2.65.34 3.602 1.13 2.728 2.253 6.266 3.887 10.018 4.973 1.684.487 4.582-.14 7.172-1.6 6.46-3.656 10.617-10.613 11.984-15.093.355-1.17-.327-1.074-1.23-1-2.725.195-5.587 2.66-9.35 5.063-3.768 2.397-11.427 4.67-18.695 4.66l-35.37-.022-.413 1.884zM84.9 38.907c.455-.08 2.087-.18 2.997.176 6.13 2.416 11.933 8.8 14.36 15.6.467 1.304.583 2.14 0 2.208-2.8.3-4.124-1.077-7.428-3.32s-6.355-3.772-10.543-5.105c-4.127-1.314-11.645-1.503-12.618-1.535s-.848-.44-.423-.862a26.21 26.21 0 0 1 13.655-7.162M114.328 62.2c.02.26-.26.554-.586.554-.03 0-7.07-.006-7.07-.006-.906 0-.922-.423-.954-.942l-.2-2.176c-.032-.6-.25-1.285.55-1.62 1.97-.833 3.83-2.76 4.678-4.413.285-.558.7-1.48 1.194-.7 1.674 2.68 2.2 5.983 2.398 9.303m-2.53 12.706c-.122.24-.573.417-.72.03-1.03-2.762-3.483-4.663-5.17-5.605-.5-.285-.554-.618-.5-1.122l.314-2.8c.026-.538.243-.926.647-.926l7.367.003c.263.003.6.237.6.433 0 3.515-1.07 7-2.536 9.98M92.637 88.745c-.52.074-1.652-.106.134-1.14 5.353-3.115 10.124-10.424 11.398-14.622.483-1.602.535-1.686 1.15-1.5.82.234 2.1 1.35 3.096 2.714s1.418 4.018.848 4.78c-3.848 5.17-9.964 8.8-16.626 9.777m13.62-33.084c-1.245.67-1.5.545-1.755-.4-2.324-8.168-9.186-14.215-12-16.003-.535-.336-.397-.564-.01-.513 6.714.894 13.293 4.56 16.607 9.578 1.9 2.878-1.652 6.678-2.853 7.33"
          fill="#fcb424"
        />
      </g>
    </svg>
  );
};

IND.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IND.defaultProps = {
  size: '24'
};

export default IND;
