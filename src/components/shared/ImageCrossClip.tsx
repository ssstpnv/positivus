import './ImageCrossClip.css';

type ImageCrossClipProps = {
  imgUrl: string;
}

function ImageCrossClip ({ imgUrl }: ImageCrossClipProps) {
  return (
    <div className="relative">
      <svg width="99" height="98" viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1.5 left-2">
        <path
          d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
          fill="#231F20"
        />
      </svg>
      <img src={imgUrl} alt="team member picture" className="min-w-[99px] h-[98px] object-cover clip-svg"/>
      <svg width="0" height="0" viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="myClip">
          <path
            d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
          />
        </clipPath>
      </svg>
    </div>
  );
}

export default ImageCrossClip;