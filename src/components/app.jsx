import React, {Component} from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import GifList from './gif_list';
import  SearchBar from './search_bar';
const GIPHY_API_KEY = "dc6zaTOxFJmzC";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs :[],
            selectedGifId: "l0MYJAzu5RTVSGeiY"
        };
    }

    search = (query)=> {
        giphy({ apiKey: GIPHY_API_KEY ,  https: true})
      .search({
        q: query,
        rating: 'g',
        limit: 20
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
    }

   selectGif = (id) => {
       debugger;
       const {gifs} = this.state;
       const newgif = [...gifs];
       //newgif.forEach(el) el.selected = false;

       // x = find gif by data,id
       // pui proprietate de selected true pe x

       newgif.push(id);
       this.setState({
        selectedGifId: id,
        gifs: newgif
       });
   } 
   render() {
       return (
        <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
       );
   }
}
export default App;