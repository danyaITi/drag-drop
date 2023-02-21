import { ChangeEvent, useRef, useState } from 'react';
import '../styles/components/item.scss';

export const useDrop = (el:string) => {
    const [imageURL, setImageURL] = useState<string | undefined>('');

    const filePick = useRef<HTMLInputElement>(null);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImageURL(fileReader.result?.toString());
    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const target= event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        fileReader.readAsDataURL(file);
        
    }

    const handlePick = () => {
        if(filePick && filePick.current){
            filePick.current.click();
        }
    }

    const dropedElement = ():JSX.Element => {
        if(el === 'image'){
            return  <div className='item'>
                <input
                    ref={filePick}
                    className='hidden'
                    type="file"
                    name="myImage"
                    accept='image/*, .png, .jpg, .gif, .web'
                    onChange={handleChange}
                />
                <span>
                    <img 
                        onClick={handlePick}
                        draggable='false' 
                        src={imageURL 
                            ? imageURL 
                            : 'https://velo1000.ru/local/templates/velo1000/images/no-img.png'
                        } 
                        height={100} 
                        alt="img" 
                    />
                </span>
            </div>
        }
        return <textarea className='text'>{el}</textarea>
    }


    return {
        dropedElement
    }
}