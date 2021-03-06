import React from 'react'
import logo from "./GoodEats.png"
import "./Projects.css"
import logoTwo from "./GoodEats.jpg"


const Projects = () => {
    return (
        <div>
            <div className='projects'>
                <h1>Some of my projects</h1>
                <h2>First Fullstack Application - GoodEats Recipe Finder</h2>
                <img className="goodEats" src={logo} alt="logo" />
                <p>A fullstack application using the PERN (React.js, Node.js, PostgreSQL, Express) stack to create an app that lets you search for recipes by ingredient and also has the ability to record user recipes.  Tested with Jest and Supertest.  This is an upgraded application from my Jquery one for the biggest foodies and uses a different recipe database then my previous one to make third party calls.</p>
                <div>
                    <a className="link" href='https://good-eats-recipe-client.vercel.app/' target="_blank">Link to live app</a>
                    <a className="link" href='https://github.com/faustc908/GoodEats-Recipe-Client' target="_blank">Client repo for app</a>
                    <a className="link" href='https://github.com/faustc908/GoodEats-Recipe-Server' target="_blank">Server repo for app</a>
                </div>
            </div>

            <div className='projects'>
                <h2>API project - GoodEats</h2>
                <img className="goodEats" src={logoTwo} alt="logo" />
                <p>An application using HTML5/CSS3/Javascript/Jquery to find new recipes based on an ingredient parameter.  Makes multiple API calls to the forkify API.</p>
                <a className='link' href='https://recipe-api-project-goodeats.cfaust.repl.co/' target="_blank">Live link</a>
                <a className='link' href='https://github.com/faustc908/GoodEats-Recipe-Finder' target='_blank'>Code for app</a>
            </div>
        </div>
    )
}

export default Projects;