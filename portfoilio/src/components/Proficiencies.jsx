import React from 'react'
import Styles from './Proficiencies.module.css'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';


class Proficiencies extends React.Component{
    render(){
        return (

            <div className= "my-5 container-fluid ">   

                <div className={`mb-5 ${Styles.heading}`} >
                    Proficiencies
                </div>
               
                <div className={`row justify-content-center ${Styles.proficiencies}`}>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="react.svg" alt="img"></img>
                        <div>React Apps</div>
                    </div>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="front.svg" alt="img"></img>
                        <div>Frontend</div>
                    </div>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="back.svg" alt="img"></img>
                        <div>Backend</div>
                    </div>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="database.svg" alt="img"></img>
                        <div>Data Structures</div>
                    </div>

                </div>
                <div className="py-5">
                <div className={`mb-2 ${Styles.heading}`} >
                    Github
                </div>
                   
                </div>
                <GitHubCalendar blockSize={20} blockMargin={5} fontSize={16} username="alokkothiyal1">
                    <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
            </div>
        )
    }
}

export default Proficiencies