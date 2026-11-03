import { forwardRef, type VideoHTMLAttributes } from 'react'

type VideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
  src: string
}

/**
 * Video with both MP4 and QuickTime source hints so iOS Safari picks up the
 * .mov assets. Defaults to a silent, looping, inline-playing background clip.
 */
const Video = forwardRef<HTMLVideoElement, VideoProps>(function Video(
  { src, poster, className = '', autoPlay = true, loop = true, muted = true, ...rest },
  ref,
) {
  return (
    <video
      ref={ref}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
      {...rest}
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
    </video>
  )
})

export default Video
