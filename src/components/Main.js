import React from 'react';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvshows: [],
      searchTerm: ''
    }
  }
  handleSubmit = () => {
    const url = `https://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ tvshows: data })
      })
      .catch(function (error) {
        console.log('Hiba', error);
      })

  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <>
        <div className="navbar">
          <div className="container">
            <nav className="nav">
              <h3 className="brand">
                <Link to="/">
                  <i></i>TVShows
                </Link>
              </h3>
              <ul className="navlinks">
                <li className="link">
                  <Link to="/">
                    HOME

                  </Link>
                </li>
                <li className="link">
                  <Link to="/about">
                    ABOUT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="body">
          <div className="search container">
            <div className="searchArea">
              <section>
                <form action="">
                  <div className="input-field">
                    <input className="searchinput" placeholder="Search tvshows" type="text"
                      onChange={this.handleChange} />
                    <button className="btn search" onClick={this.handleSubmit}>Search</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <div className="body-container" style={{ display: 'flex', flexWrap: 'wrap' }}>

            {this.state.tvshows.map((tvshow) => {
              return (
                <Card style={{ width: '18rem', margin: '50px 50px 40px 40px', height: '360px' }} key={tvshow.show.id}>
                  <Card.Body>
                    <CardImg src={tvshow.show.image.medium}></CardImg>
                    <Card.Title>{tvshow.show.name}</Card.Title>
                    <Card.Text >
                      TvShow started: {tvshow.show.premiered}<br></br>
                      {/*Network: {tvshow.show.network}*/}
                      Overview: {tvshow.show.summary}
                    </Card.Text>
                    <Button variant="primary">More</Button>
                  </Card.Body>
                </Card>
              )
            })}

          </div>
        </div>
      </>
    );
  }
}