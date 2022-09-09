import Topbar from "./Topbar";
import "./../Style/common.css";
const Manage = ()=>{
    return(<>
     <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
        
    <Topbar />
    <div className="flex mt-20 gap-8">
        <div className="flex gap-24">
            <div className="flex justify-between  flex-wrap">
                <div>
                    <div className="text-[#250C50] pb-2 text-lg itemcount">
                        Settings
                    </div>
                    <div className="text-[#6549F6]  text-md pb-2 itemcount">
                        General
                    </div>
                    <div className="text-[#6549F6]  text-md pb-2 itemcount">
                        Layers
                    </div>
                    <div className="text-[#6549F6]  text-md itemcount">
                        Rules
                    </div>
                </div>
            </div>
        </div>
        <div className="ml-14" style={{width : "100%"}}>
        <div className="container">
        <div className="row">
        <div className="collection-stats">
        <div className="nav-main">
                        
      
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">Components</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false">One-of-Ones</button>
                            </li>
                        </ul> 
                    </div>
                    <hr class="my-0"/>
                    {/* <div className="tab-content" id="pills-tabContent"> */}
                        {/* <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab"> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col text-end py-3">
                                        <div className="selected">
                                            <select name="" id="select">
                                                <option value="">
                                                    By design
                                                </option>
                                                <option value="">
                                                    By design
                                                </option>
                                                <option value="">
                                                    By design
                                                </option>
                                                <option value="">
                                                    By design
                                                </option>
                                                <option value="">
                                                    By design
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                  
                                    <div className="col-lg-12 col-md-12">
                                        <div className="cloth-section">
                                            <p className="one" style={{display :"flex"}}>Clothes &nbsp;&nbsp;<img src="assest/image/dots.png" alt="" />
                                            </p>
                                            <div className="flex flex-wrap justify-center mt-14">
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                                    <div className="cloth-box">
                                                        <img src="assest/image/Clothes2.png" alt="" />
                                                    </div>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                    <div className="dots">
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                    </div>
                                                    <div className="box-current"></div>
                                                </div>
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4 ">
                                                    <div className="cloth-box">
                                                        <img src="assest/image/clothes3.png" alt="" />
                                                    </div>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                    <div className="dots">
                                                        <img src="assest/image/dots.png" className="dot-i" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt=""/>
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt=""/>
                                                    </div>
                                                    <div className="box-current"></div>
                                                </div>
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                                    <div className="cloth-box">
                                                        <img src="assest/image/Clothes2.png" alt=""/>
                                                    </div>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                    <div className="dots">
                                                    <img src="assest/image/dots.png" className="dot-i" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt=""/>
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt=""/>
                                                    </div>
                                                    <div className="box-current"></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="background-section py-lg-5 py-md-5 mt-16">
                                            <p className="one" style={{display :"flex"}}>Backgrounds &nbsp;&nbsp;<img src="assest/image/dots.png"
                                                    alt=""/>
                                            </p>
                                            <div className="flex flex-wrap justify-center mt-14">
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                                    <div className="background-box">

                                                    </div>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                    <div className="dots">
                                                   
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt=""/>
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt=""/>
                                                    </div>
                                                    <div className="box-current"></div>
                                                </div>
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                                    <div className="back2 background-box ">

                                                    </div>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                    <div className="dots">
                                                        <img src="assest/image/dots.png" className="dot-i"
                                                            alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt=""/>
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt=""/>
                                                    </div>
                                                    <div className="box-current"></div>
                                                </div>
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                                    <div className="back3 background-box">

                                                    </div>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                    <div className="dots">
                                                        <img src="assest/image/dots.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt="" />
                                                        <img src="assest/image/Ellipse1.png" alt=""/>
                                                        <img src="assest/image/Ellipse2.png" alt="" />
                                                        <img src="assest/image/Ellipse2.png" alt=""/>
                                                    </div>
                                                    <div className="box-current"></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                        {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">

                            </div> */}
                       
                    {/* </div> */}
                
                 
                    {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Components</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">One-of-Ones</Nav.Link>
                                </Nav.Item>

                               
                            </Nav>
                            <hr className="my-0" />
                    </Tab.Container>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h1>Components</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">

                        </Tab.Pane>
                    </Tab.Content> */}
                    
                
                    
        </div>
        </div>
        </div>
        </div>
        </div>
     </div>
    </>);
}
export default Manage;