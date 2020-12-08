import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import '../../App.css'


class Home extends Component {
  render() {
    return(
         
        <div class = "mainpage">
        <Grid className="landing-grid">
        
          <Cell col={10}>
            <div className = "banner-text">
            <h1>Effective Communication With Online Learning</h1>
            
            <p>Online Tutoring Session 24hrs a Day</p>
            </div>
               
         
            
          </Cell>
          
          <Cell col={4}>
          <div className = "subtitle">
            
            <h5> Flexible Hours</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "subtitle">
            
            <h5>Live-Video Tutoring</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "subtitle">
            
            <h5> Fast Response</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>
            
        
        </Grid>
        
  <hr/>
 <Grid className="stepstofollow">
<Cell col={12}>
<div className= "title-text">
    <h1>3 Simple Steps to Start!</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
    </div>
    </Cell>

    <Cell col={4}>
  <div className = "steps">
    
    <h5>1.Create a Account</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
    </div>
    </Cell>

    <Cell col={4}>
  <div className = "steps">
    
    <h5>2.Tutor Request Session</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
    </div>
    </Cell>

    <Cell col={4}>
  <div className = "steps">
    
    <h5>3.Meet and Solve</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
    </div>
    </Cell>
</Grid>


<hr/>
        <Grid className="testing">
        
          <Cell col={12}>
            <div className = "test-level">
            <h1>Testimonails</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            
            </div>
            </Cell>
            <Cell col={4}>
          <div className = "stepslevel">
            

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "stepslevel">
            
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "stepslevel">
            
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>
            </Grid>

            <hr/>

           

            <footer>
    <div class="container">
      <div class="row">
        <div class="logo">
           TutorMe
        </div>
        <div class="social">
            <a href="https://facebook.com/" target="/"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com/" target="/"><i class="fa fa-twitter"></i></a>
            <a href="https://instagram.com/" target="/"><i class="fa fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="/"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.pinterest.com/" target="/"><i class="fa fa-pinterest"></i></a>
        </div>
      </div>
    </div>
  </footer>
  
  
  <section class="copyright">
    <div class="container">
      <p>&copy; 2020 copyright all right reserved</p>
    </div>
  </section>

 
</div>
    )
  }
}

export default Home;