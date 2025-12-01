export default function ProjectMedia({
    src,
    alt,
    caption,
    type = "image",
    priority = false,
}) {
    const isVideo = type === "video";

    return (
        <figure className="space-y-3">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                {isVideo ? (
                    <video
                        src={src}
                        className="h-full w-full object-cover"
                        controls
                        playsInline
                    />
                ) : (
                    // For now use a basic img; can swap to next/image later if desired.
                    <img
                        src={src}
                        alt={alt}
                        loading={priority ? "eager" : "lazy"}
                        className="h-full w-full object-cover"
                    />
                )}
            </div>
            {caption ? (
                <figcaption className="text-sm text-slate-600 ">
                    {caption}
                </figcaption>
            ) : null}
        </figure>
    );
}
