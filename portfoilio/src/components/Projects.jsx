import React from 'react'
import Styles from './Projects.module.css'

class Projects extends React.Component{
    render() {
        return (
           
            <div className={Styles.main_container}>
                <h1 className ={Styles.heading}>Projects</h1>
                <br></br>
                <div className="container-fluid">
                <div className="row justify-content-center">

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="sweggy.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Swiggy Clone</h5>
                            <p className="card-text">Clone of Swiggy.com with some basic funcitonalities(Online Payment,User Auth, Mapbox etc. )</p>
                            <div className="mt-auto">
                            <a href="http://sweggy.tk" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/AlokKothiyal1/SwiggyClone" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>    

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="pexels.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Stock Images & Videos Viewer</h5>
                            <p className="card-text">Use of Pixel API to search & view different Stock photographs and Videos Shared by Talented Creators.</p>
                            <div className="mt-auto">
                            <a href="https://react-pexels.alokkothiyal.vercel.app/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/AlokKothiyal1/React-Pixels" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>    

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="typing.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Typing Speed & Accuracy Calculator</h5>
                            <p className="card-text">Checkout your average Typing speed & accuracy along with a fun typing game to enhance your Typing speed & Accuracy.</p>
                            <div className="mt-auto">
                            <a href="https://alokkothiyal1.github.io/Masai_typing/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/AlokKothiyal1/Masai_typing" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>    
                </div>

                <br></br>
                <div className="row justify-content-center"> 

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="trivia.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Trivia Quiz!</h5>
                            <p className="card-text">A Fun Tivia Quiz app , Making use of OpenTrivia API to fetch questions based on different Categories & difficulty level.</p>
                            <div className="mt-auto">
                            <a href="https://alokkothiyal1.github.io/Trivia-Quiz/" className="btn btn-success  btn-block">Live</a>
                            <a href="https://github.com/AlokKothiyal1/Trivia-Quiz" className="btn btn-outline-dark  btn-block">Github link</a>
                            </div >
                        </div>
                    </div>    

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="snake.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Snake & ladder Game</h5>
                            <p className="card-text">The Classic Snake & Ladder game can be played between 2 players.</p>
                            <div className="mt-auto">
                            <a href="https://alokkothiyal1.github.io/Snake-Ladder-Game/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/AlokKothiyal1/Snake-Ladder-Game" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>

                </div>

                </div>  
            </div>
        )
    }
}
export default Projects