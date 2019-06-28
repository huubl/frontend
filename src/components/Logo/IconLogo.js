import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg width="100%" height="100%" viewBox="0 0 66 79">
      <g id="Logo-OR" id="Logo OR">
        <path
          id="path4086"
          d="M40.634,16.687c-2.992,0 -5.435,2.443 -5.435,5.434c0,2.992 2.443,5.433 5.435,5.433c2.991,0 5.432,-2.441 5.432,-5.433c0,-2.991 -2.441,-5.434 -5.432,-5.434Zm0,1.6c2.126,0 3.832,1.708 3.832,3.834c0,2.127 -1.706,3.833 -3.832,3.833c-2.127,0 -3.835,-1.706 -3.835,-3.833c0,-2.126 1.708,-3.834 3.835,-3.834Z"
          style="fill:#0d2c54;fill-rule:nonzero;"
        />
        <path
          id="circle4128"
          d="M40.634,10.343c-6.493,0 -11.778,5.284 -11.778,11.777c0,0.001 0,0.002 0,0.003c0.006,2.926 1.437,5.419 2.803,7.586c0.009,0.014 0.018,0.028 0.028,0.042l8.086,11.475c0.187,0.266 0.493,0.425 0.818,0.425c0.322,0 0.625,-0.155 0.813,-0.417l8.245,-11.542c0.004,-0.005 0.008,-0.011 0.011,-0.016c1.606,-2.345 2.75,-4.725 2.752,-7.551c0,-0.001 0,-0.001 0,-0.002c-0.001,-6.492 -5.286,-11.777 -11.778,-11.777l0,-0.003Zm0,2c5.411,0 9.777,4.365 9.778,9.777c-0.001,2.293 -0.897,4.223 -2.397,6.415c-0.002,0.003 -0.002,0.005 -0.005,0.008l-7.416,10.378l-7.243,-10.279c-1.326,-2.103 -2.49,-4.261 -2.496,-6.522l0,-0.002c0.002,-5.411 4.367,-9.775 9.779,-9.775l0,0Z"
          style="fill:#0d2c54;fill-rule:nonzero;"
        />
        <path
          d="M18.226,73.564c-0.019,0.03 -0.556,0.757 -0.556,0.757c-0.818,1.173 -1.865,1.94 -2.642,2.438c-0.008,0.003 -0.009,0.006 -0.015,0.008c-3.575,2.226 -8.49,1.101 -11.336,-2.269c-2.005,-2.069 -3.013,-4.953 -2.351,-7.743c0,-0.006 0.002,-0.008 0.003,-0.016c0.224,-0.896 0.618,-2.133 1.47,-3.281l18.108,-22.104c-3.309,-4.242 -5.287,-9.571 -5.287,-15.358c0,-13.798 11.215,-25.014 25.014,-25.014l0,0.004c13.798,0 25.014,11.216 25.014,25.014c0,13.798 -11.216,25.014 -25.014,25.014c-2.661,0 -5.224,-0.422 -7.63,-1.194l-14.777,23.744l-0.001,0Zm22.408,-69.782c12.285,0 22.214,9.929 22.214,22.214c0,12.285 -9.929,22.214 -22.214,22.214c-12.285,0 -22.214,-9.929 -22.214,-22.214c0,-12.285 9.929,-22.214 22.214,-22.214Z"
          style="fill:#ff3f00;"
        />
      </g>
    </svg>
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
