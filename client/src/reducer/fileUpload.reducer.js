import { IMAGE_SAVE_REQUEST, IMAGE_SAVE_SUCCESS, IMAGE_SAVE_FAIL,  PDF_SAVE_REQUEST,  PDF_SAVE_SUCCESS,  PDF_SAVE_FAIL } from "../constants/file.constant";
function imageReducer(state={image:{}},action){

    switch (action.type) {
      case  IMAGE_SAVE_REQUEST:
        return { loading: true};
      case  IMAGE_SAVE_SUCCESS:
        return { loading: false,success: true,message:action.payload.message, image: action.payload };
      case  IMAGE_SAVE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }
 
  function pdfReducer(state={pdf:{}},action){

    switch (action.type) {
      case  PDF_SAVE_REQUEST:
        return { loading: true};
      case  PDF_SAVE_SUCCESS:
        return { loading: false,success: true,message:action.payload.message, PDF: action.payload };
      case   PDF_SAVE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }

  export {imageReducer,pdfReducer}