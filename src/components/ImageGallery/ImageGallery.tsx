import React from "react";
import { Image } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

interface ImageGalleryProps {
	images: Image[];
	activateModal: (image: Image) => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, activateModal }) => {

	return (
		<ul className={s.gallery}>
			{images.map(image => (
				// Використовуємо стрілочну функцію для виклику функції handleClick, щоб вона не викликалася відразу, а передавалася як функція
				<li key={image.id} className={s.item}>
					<ImageCard image={image} activateModal={activateModal} />
				</li>
			))}
		</ul>

	)
}

export default ImageGallery