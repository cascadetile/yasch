/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';

interface IProps {
  theme: string
}

export const StarLarge: React.FC<IProps> = ({ theme }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="540" height="887" viewBox="0 0 540 887" fill="none">
      <path d="M94.2519 5.44034C97.899 -0.941399 107.101 -0.941401 110.748 5.44034L157.209 86.7383C160.467 92.439 168.099 93.7847 173.11 89.5421L244.575 29.0375C250.184 24.2881 258.831 27.4353 260.076 34.6796L275.929 126.965C277.041 133.436 283.752 137.311 289.912 135.038L377.761 102.625C384.657 100.081 391.706 105.996 390.398 113.229L373.732 205.371C372.563 211.832 377.544 217.769 384.11 217.74L477.747 217.327C485.097 217.295 489.698 225.264 485.995 231.613L438.819 312.499C435.511 318.17 438.162 325.453 444.341 327.671L532.472 359.309C539.39 361.792 540.988 370.855 535.337 375.555L463.342 435.427C458.293 439.625 458.293 447.375 463.342 451.573L535.337 511.445C540.988 516.145 539.39 525.208 532.472 527.691L444.342 559.329C438.162 561.547 435.511 568.83 438.819 574.501L485.995 655.387C489.698 661.736 485.097 669.705 477.747 669.673L384.11 669.26C377.544 669.231 372.563 675.168 373.732 681.629L390.398 773.771C391.706 781.004 384.657 786.919 377.761 784.375L289.912 751.962C283.752 749.689 277.041 753.564 275.929 760.035L260.076 852.32C258.831 859.565 250.184 862.712 244.575 857.962L173.11 797.458C168.099 793.215 160.467 794.561 157.209 800.262L110.748 881.56C107.101 887.941 97.899 887.941 94.2519 881.56L47.791 800.262C44.5331 794.561 36.9012 793.215 31.89 797.458L-39.5746 857.962C-45.1844 862.712 -53.8315 859.565 -55.0759 852.32L-70.9294 760.035C-72.041 753.564 -78.7525 749.689 -84.9124 751.962L-172.761 784.375C-179.657 786.919 -186.706 781.004 -185.398 773.771L-168.732 681.629C-167.563 675.168 -172.544 669.231 -179.11 669.26L-272.747 669.673C-280.097 669.705 -284.698 661.736 -280.995 655.387L-233.819 574.501C-230.511 568.83 -233.162 561.547 -239.342 559.329L-327.472 527.691C-334.39 525.208 -335.988 516.145 -330.337 511.445L-258.342 451.573C-253.293 447.375 -253.293 439.625 -258.342 435.427L-330.337 375.555C-335.988 370.855 -334.39 361.792 -327.472 359.309L-239.342 327.671C-233.162 325.453 -230.511 318.17 -233.819 312.499L-280.995 231.613C-284.698 225.264 -280.097 217.295 -272.747 217.327L-179.11 217.74C-172.544 217.769 -167.563 211.832 -168.732 205.371L-185.398 113.229C-186.706 105.996 -179.657 100.081 -172.761 102.625L-84.9124 135.038C-78.7524 137.311 -72.041 133.436 -70.9294 126.965L-55.0759 34.6796C-53.8315 27.4353 -45.1844 24.2881 -39.5746 29.0375L31.89 89.5421C36.9012 93.7847 44.5331 92.439 47.791 86.7383L94.2519 5.44034Z" stroke={theme} />
    </svg>
  );
};

export default StarLarge;