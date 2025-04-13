import Svg, {Circle, Path} from 'react-native-svg';

export default function UserLogo({
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
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Circle cx="15" cy="15" r="14.5" stroke={stroke} fill="none" />
      <Path
        d="M18.25 11.8235C18.25 10.7675 17.83 9.81159 17.152 9.12029C16.4733 8.42824 15.5358 8 14.5 8C13.4642 8 12.5267 8.42824 11.848 9.12029C11.17 9.81159 10.75 10.7675 10.75 11.8235C10.75 12.8796 11.17 13.8355 11.848 14.5268C12.5267 15.2188 13.4642 15.6471 14.5 15.6471C15.5358 15.6471 16.4733 15.2188 17.152 14.5268C17.5006 14.1721 17.7771 13.7508 17.9655 13.2869C18.154 12.8229 18.2506 12.3256 18.25 11.8235ZM10 19.4706C10 20.2353 11.6875 21 14.5 21C17.1385 21 19 20.2353 19 19.4706C19 17.9412 17.2345 16.4118 14.5 16.4118C11.6875 16.4118 10 17.9412 10 19.4706Z"
        fill={fill}
      />
    </Svg>
  );
}
