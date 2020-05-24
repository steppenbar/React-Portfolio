import React from 'react';
import React {Component} from 'react';
import './App.css';

class App extends Component{
  render() {
    return(
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            
          </Drawer>
        </Layout>
      </div>
    )
  }
}


export default App;
