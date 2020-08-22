import { IMAGE_SAVE_REQUEST, IMAGE_SAVE_SUCCESS, IMAGE_SAVE_FAIL, PDF_SAVE_REQUEST, PDF_SAVE_SUCCESS, PDF_SAVE_FAIL } from "../constants/file.constant";
import Axios from "axios";

const saveImage = (image) => async (dispatch) => {
    try {
      dispatch({ type: IMAGE_SAVE_REQUEST, payload: image });
        const { data } = await Axios.post('/api/image/uploadimg/', image.formData, {
            headers: {
      
            }
        });
        dispatch({ type: IMAGE_SAVE_SUCCESS, payload: data });   
    
  
    } catch (error) {
        if (error.response) {
      dispatch({ type: IMAGE_SAVE_FAIL, payload: error.response.data.message });
        }else{
      dispatch({ type: IMAGE_SAVE_FAIL, payload: error.message });
        }
    }


  }
  const savepdf = (pdf) => async (dispatch) => {
    console.log(pdf);
    try {
      dispatch({ type: PDF_SAVE_REQUEST, payload: pdf });
        const { data } = await Axios.post('/api/image/uploadpdf/', pdf.formData, {
            headers: {
            
            }
        });
        dispatch({ type: PDF_SAVE_SUCCESS, payload: data });   
    
  
    } catch (error) {
        if (error.response) {
      dispatch({ type: PDF_SAVE_FAIL, payload: error.response.data.message });
        }else{
      dispatch({ type: PDF_SAVE_FAIL, payload: error.message });
        }
    }


  }

  export{saveImage,savepdf}