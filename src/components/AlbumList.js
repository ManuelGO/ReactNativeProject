import React from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    constructor(props) {
      super(props);
    }
    state = {albums: []};

    componentWillMount(){
      fetch('https://rallycoding.herokuapp.com/api/music_albums').then((response)=>{            
            return response.json();
        }).then((data)=>{
            this.setState({albums: data});
        })
    }
    renderAlbums(){
        return this.state.albums.map((album)=> <AlbumDetail key={album.title} album={album} />);
    }
  
    render() {
      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
  }


export default AlbumList;