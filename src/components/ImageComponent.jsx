import dragon from "../assets/dragon.jpg"
import { dragonImage } from "../assets/images"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageComponent = () => {
    return (
        <>
            <p>Image Component</p>

            <p>Image Via Local Storage</p>
            <img src="{dragon}" alt="dragon-image" />

            <p>Image Via CDN Storage</p>
            <img src={dragonImage} alt="Dragon-Image" />

            <LazyLoadImage
                alt={dragonImage}
                effect="blur"
                wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: { transitionDelay: "0.5s" },
                }}
                src={dragonImage} />

        </>
    )
}

export default ImageComponent