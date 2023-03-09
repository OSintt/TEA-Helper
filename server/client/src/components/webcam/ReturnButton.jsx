import IconButton from "@mui/material/IconButton";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ReturnButton = ({fn}) => {
    return (
        <IconButton aria-label="Close Webcam" color="primary" onClick={fn}>
            <AiOutlineCloseCircle />
        </IconButton>   
    )
}
export default ReturnButton;