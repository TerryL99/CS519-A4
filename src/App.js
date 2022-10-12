import React from 'react';
class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

      super(props);

      this.state = {
          items: [],
          isLoaded: false
      }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','*');
      
      fetch('https://cs519-a4-fa.azurewebsites.net/api/get-report?code=WbDHi1YqjkDjxUeWWzH2m9lGewYlTPBY_2WhCW4zsbkPAzFudfVPtA==')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  items: json,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

      const { isLoaded, items } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return (
          <div className="App">
              <table>
                <tr>
                  <th>Product Name</th>
                  <th>Product ID</th>
                  <th>Quant Recv</th>
                  <th>Quant Ship</th>
                  <th>Quant Retn</th>
                  <th>Quant Hand</th>
                </tr>
                {items.map(item => (
                    <tr>
                      <td>{item.prod_name}</td>
                      <td>{item.prod_id}</td>
                      <td>{item.quantity_recv}</td>
                      <td>{item.quantity_ship}</td>
                      <td>{item.quantity_retn}</td>
                      <td>{item.quantity_hand}</td>
                    </tr>
                ))}
              </table>
          </div>
      );

  }

}

export default App;