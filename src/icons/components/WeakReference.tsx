import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'deepBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgWeakReference = ({
    size = 'default',
    className = '',
    color,
    ...otherProps
}: IconProps) => {
    const props = Object.assign(
        {},
        {
            size,
            className,
            ...otherProps
        }
    );
    const classNameColor = color ? ' moonstone-icon_' + color : '';
    props.className =
    className + ' moonstone-icon moonstone-icon_' + size + classNameColor;
    return (
        <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
        >
            <path
        d="M11.1273 16.7105L11.1274 16.7105C11.2382 16.5997 11.3989 16.556 11.5509 16.5967C11.7026 16.6374 11.8211 16.7559 11.8618 16.9076C11.9024 17.0593 11.859 17.2211 11.7481 17.3321L11.748 17.3322L10.8643 18.2159L10.8639 18.2163C10.5097 18.5675 10.0313 18.7645 9.53259 18.7645C9.03391 18.7645 8.55538 18.5675 8.20122 18.2163L8.20077 18.2159L7.79122 17.8063L7.79078 17.8059C7.43964 17.4518 7.24258 16.9733 7.24258 16.4746C7.24258 15.9759 7.43964 15.4974 7.79078 15.1433L7.79134 15.1427L9.59966 13.3385L9.6 13.3381C9.95415 12.987 10.4327 12.7899 10.9314 12.7899C11.4301 12.7899 11.9084 12.9869 12.2626 13.3381L12.263 13.3385L12.8775 13.9529C12.9886 14.064 13.0319 14.2259 12.9913 14.3776C12.9506 14.5293 12.8321 14.6478 12.6804 14.6884L12.6804 14.6885C12.5287 14.7291 12.3668 14.6858 12.2558 14.5747L11.6415 13.9604L11.1273 16.7105ZM11.1273 16.7105L10.2438 17.594C10.0544 17.7829 9.79794 17.8889 9.53052 17.8889C9.2631 17.8889 9.00663 17.7829 8.81723 17.594L8.408 17.1848C8.21917 16.9954 8.11313 16.7389 8.11313 16.4715C8.11313 16.2042 8.21908 15.9478 8.40779 15.7584C8.40786 15.7584 8.40793 15.7583 8.40799 15.7582L10.2149 13.9605L10.215 13.9604M11.1273 16.7105L10.215 13.9604M10.215 13.9604C10.4043 13.7716 10.6609 13.6656 10.9283 13.6656M10.215 13.9604L10.9283 13.6656M10.9283 13.6656C11.1956 13.6656 11.4521 13.7716 11.6413 13.9603L10.9283 13.6656ZM14.1061 1.89393L14.0621 1.85H14H6C4.81716 1.85 3.85 2.81716 3.85 4V20C3.85 21.1819 4.80618 22.15 5.99 22.15H18C19.1828 22.15 20.15 21.1828 20.15 20V8V7.93787L20.1061 7.89393L14.1061 1.89393ZM12.85 9V9.15H13H17.85V19.85H6.15V4.15H12.85V9ZM15.7978 11.2292L15.7974 11.2288C15.4432 10.8775 14.9647 10.6806 14.466 10.6806C13.9673 10.6806 13.4888 10.8776 13.1347 11.2288L13.1342 11.2292L12.2506 12.1129L12.2505 12.113C12.1395 12.224 12.0961 12.3858 12.1368 12.5375C12.1775 12.6892 12.296 12.8077 12.4476 12.8483C12.5993 12.889 12.7612 12.8456 12.8723 12.7346L12.8723 12.7346L13.7559 11.851C13.9452 11.6622 14.2017 11.5562 14.4691 11.5562C14.7365 11.5562 14.993 11.6622 15.1824 11.8511L15.5916 12.2603C15.7804 12.4497 15.8865 12.7062 15.8865 12.9736C15.8865 13.2409 15.7806 13.4972 15.592 13.6866C15.5919 13.6867 15.5918 13.6868 15.5917 13.6869L13.7838 15.4845L13.7836 15.4847C13.5943 15.6735 13.3377 15.7795 13.0703 15.7795C12.803 15.7795 12.5464 15.6735 12.3571 15.4847L11.7428 14.8704C11.6318 14.7593 11.4699 14.716 11.3182 14.7566L11.3182 14.7567C11.1665 14.7973 11.048 14.9158 11.0073 15.0675C10.9667 15.2192 11.0101 15.3811 11.1211 15.4922L11.7356 16.1066L11.736 16.107C12.0902 16.4582 12.5685 16.6552 13.0672 16.6552C13.5659 16.6552 14.0445 16.4581 14.3986 16.107L14.3989 16.1066L16.2073 14.3024L16.2078 14.3018C16.559 13.9477 16.756 13.4692 16.756 12.9705C16.756 12.4718 16.5589 11.9933 16.2078 11.6392L16.2074 11.6388L15.7978 11.2292ZM16.3847 7.17814H14.7774V5.48123L16.3847 7.17814Z"
        stroke="black"
        strokeWidth={0.3}
      />
        </svg>
    );
};

export default SvgWeakReference;
