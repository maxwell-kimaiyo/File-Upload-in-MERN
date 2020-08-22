import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageSpinner from "../../../components/Spinner";
import { Fade } from "react-reveal";
import { saveImage, savePdf } from "../../../actions/fileUpload.action";

function App() {
  const [file, setFile] = useState('');
  const [Pdf, setPdf] = useState("");
  //image save
  const imageSave = useSelector((state) => state.imageSave);
  const {   
    loading: imgSave,
    success: imgSuccess,
    message:imgMessage,
    error: imgError,} = imageSave;


  const PdfSave = useSelector((state)=>state.PdfSave)
  const {
    loading: PdfSave,
    success: PdfSuccess,
    message:PdfMessage,
    error: PdfError
  } = PdfSave;

  const dispatch = useDispatch();
  useEffect(() => {
    if(imgSuccess) alert(imgMessage);;
    if(PdfSuccess) alert(PdfMessage);;
    return () => {};
  }, [imgSuccess,PdfSuccess,successSave]);

  const onChange = e => {
    if(maxSelectFile(e)){ 
      setFile(e.target.files[0]);
   }
  };
  const onChangePdf = e =>{
    setPdf(e.target.files[0])
  }
 
  const imgHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    dispatch(
      saveImage({formData:formData})
    );
  
  };
  const PdfHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', Pdf);
    console.log(Pdf);
    dispatch(
      savePdf({ formData:formData})
    );
    
  };

  const maxSelectFile=(event)=>{
    let files = event.target.files // create file object
        if (files.length > 1) { 
           const msg = 'Only 1 images can be uploaded at a time'
           event.target.value = null // discard selected file
           console.log(msg)
          return false;
 
      }
    return true;
 
 }
  return (
    <>
    
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Interface</h1>
        </div>
        <Fade bottom duration={1000} distance="40px">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Components
                  </h6>
                </div>

                <div className="card-body">
                  <div className="tab round">
                    <ul className="nav nav-tabs" role="tablist">
              
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-08-tab"
                          data-toggle="tab"
                          href="#profile-08"
                          role="tab"
                          aria-controls="profile-08"
                          aria-selected="false"
                        >
                          <i className="fa fa-user"></i> File Upload
                        </a>
                      </li>
               
                    </ul>
                    <div className="tab-content">
                      
                       
                      <div
                        className="tab-pane fade py-3"
                       id="profile-08"
                        role="tabpanel"
                        aria-labelledby="profile-08-tab"
                      >
                 <div className="row no-gutters align-items-center">
                 <div className="col-md-6 col-sm-12 col-xs-12">
                     
                          <form onSubmit={imgHandler}>
                            <div className="form-group">
                              <div className="form-group ">
                                {imgSave && <div>{<PageSpinner />}</div>}
                                {imgError && (
                                  <div className="alert alert-danger">
                                    {imgError}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="label " htmlFor="greetings">Image</label>
                              <input
                                type="file"
                                className="form-control-file"
                                id="greetings"
                                onChange={onChange}
                                required
                              />
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Update Img
                            </button>
                          </form>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                          <form onSubmit={PdfHandler}>
                            <div className="form-group">
                              <div className="form-group ">
                                {PdfSave && <div>{<PageSpinner />}</div>}
                                {PdfError && (
                                  <div className="alert alert-danger">
                                    {PdfError}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="label " htmlFor="greetings">Pdf</label>
                              <input
                                type="file"
                                className="form-control-file"
                                id="greetings"
                                onChange={onChangePdf}
                                required
                              />
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Update Pdf
                            </button>
                          </form>
                      </div>
                          </div>
                      </div> 
                      
              
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default App;
