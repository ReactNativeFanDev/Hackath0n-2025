import Svg, {Circle, Path} from 'react-native-svg';

export default function MessageLogo({
  height,
  width,
  fill,
  stroke,
}: {
  height: number;
  width: number;
  fill: string;
  stroke: string;
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      stroke="none">
      <Circle cx="15" cy="15" r="14.5" stroke={stroke} fill="none" />
      <Path
        d="M21 12.209V18.1246C21 18.6029 20.8246 19.0631 20.5096 19.4111C20.1947 19.759 19.7639 19.9685 19.3056 19.9965L19.2 19.9997H10.8C10.3409 19.9997 9.89909 19.8169 9.56504 19.4888C9.231 19.1607 9.02994 18.7121 9.003 18.2346L9 18.1246V12.209L14.667 16.1446L14.7366 16.1859C14.8186 16.2276 14.9087 16.2493 15 16.2493C15.0913 16.2493 15.1814 16.2276 15.2634 16.1859L15.333 16.1446L21 12.209Z"
        fill={fill}
      />
      <Path
        d="M19.1998 10C19.8478 10 20.416 10.3563 20.7328 10.8919L14.9998 14.8732L9.26685 10.8919C9.41728 10.6374 9.62397 10.424 9.86967 10.2696C10.1154 10.1152 10.3929 10.0243 10.6792 10.0044L10.7998 10H19.1998Z"
        fill={fill}
      />
    </Svg>
  );
}
