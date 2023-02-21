import { useDrop } from '../hooks/useDrop';

const Item = ({el}: 
    {el:string}) => {
     
    const {dropedElement} = useDrop(el);

    return (
        <>  
            {dropedElement()}
        </>
    )
}

export default Item