import { images } from "../../data/home-images";
import Image from "next/image";

function HomeImages() {
  return (
    <section className="mx-auto flex flex-col lg:flex-row">
      {images.length > 0 &&
        images.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            height={480}
            width={320}
            alt={img.alt}
            priority
            draggable="false"
            className="lg:w-1/6 h-auto object-cover"
          />
        ))}
    </section>
  );
}

export default HomeImages;
