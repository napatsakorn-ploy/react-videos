import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //console.log(response.data.items);
        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;