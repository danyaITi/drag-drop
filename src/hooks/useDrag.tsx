import { useState } from 'react';

export const useDrag = () => {
    const [items, setItems] = useState<string[]>([]);

	const handleOnDrag = (e: React.DragEvent, el:string) => {
		e.dataTransfer?.setData('el', el);
	}

	const handleOnDrop = (e: React.DragEvent) => {
		const item = e.dataTransfer?.getData('el') as string;
		setItems([...items, item]);
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	}

    return {
        items,
        handleDragOver,
        handleOnDrop,
        handleOnDrag
    }
}