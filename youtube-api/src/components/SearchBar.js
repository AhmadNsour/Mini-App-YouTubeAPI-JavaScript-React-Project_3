import React  from 'react';

class SearchBar extends React.Component {
    state = 
    { 
      searchInput: ''

    };

    Change = event => this.setState({ searchInput: event.target.value });

    Submit = (event) => {

      const { searchInput } = this.state;
      const { onFormSubmit } = this.props;

    onFormSubmit(searchInput);

      event.preventDefault();
    }

    render() {
      const { searchInput } = this.state;

      return (
        <div>
          <form onSubmit={this.Submit}>
            <input 
              placeholder="Search" 
              value={searchInput} 
              onChange={this.Change} 
            />
          </form>
        </div>
      );
    }
}

export default SearchBar;
