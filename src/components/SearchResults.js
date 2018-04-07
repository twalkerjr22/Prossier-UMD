
import React, {
    Component,
    PropTypes
} from "react";

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Feed,
    Statistic,
    Segment,
    Visibility,
    Input
} from 'semantic-ui-react'


import {
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    PieChart,
    Pie
} from 'recharts';


export default class SearchResultsContainer extends React.Component {


constructor(){
  super();

}


render(){

    return(
         <div>
            {this.renderSearchData()}
         </div>
    );
}

renderSearchData(){

    return(

      <div id = "searchInfo" >
        <Divider horizontal style = {
            {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '2em'
            }
            } >

            {this.state.searchInputVirtual}

        </Divider>

        <Grid divided = 'vertically' >

          <Grid.Row columns = {1}  >

            <div id = "tweetHome" >
              <Statistic size = 'huge' >
                <Statistic.Value > 356 </Statistic.Value>
                <Statistic.Label >
                < Header as = 'h1' > Tweets in last 24 hours </Header>
                </Statistic.Label >
              </Statistic>
            </div>

          </Grid.Row>

          <Grid.Row columns = {3}   >

            {/*Adding two columns to get the pie chart in the center.Tried
              other solutions and this little trick seemed to work*/
            }

            <Grid.Column ></Grid.Column>

            <Grid.Column >
              <Header as = 'h1' content = 'Tweet Breakdown'
              style = {
                {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '.5em',
                textAlign: 'center'
                }
              }/>

              <PieChart width = {800} height = {400}>

                <Pie data = {this.state.data01} cx = {200} cy = {200} outerRadius = {60}
                fill = "#8884d8" dataKey="value"/ >

                <Pie data = {this.state.data02} cx = {200} cy = {200} innerRadius = {70}
                outerRadius = {90} fill = "#82ca9d" label  dataKey="value"/ >
                <Tooltip > </Tooltip>
              </PieChart >
            </Grid.Column>

      <Grid.Column > </Grid.Column>

    </Grid.Row>

    <Grid.Row columns = {2} >
      <Grid.Column>
        <Header as = 'h2' content = 'Positive Tweets'
          style = {
              {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '.05em',
                textAlign: 'center'
              }
            }
          />
        {/*tweetPosFeeds will eventually have tweets from the server*/}
        <Feed events = {this.state.tweetPosFeeds}/>
      </Grid.Column >

        <Grid.Column >
          <Header as = 'h2' content = 'Negative Tweets'
              style = {
              {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '.05em',
                textAlign: 'center'
              }
            }/>
          <Feed events = {this.state.tweetNegFeeds}/>
        </Grid.Column >

    </Grid.Row>

    <Grid.Row columns = {3}   >
        {/*Adding two empty columns and the linchart in the middle
          as a way to get it dead center of the screen*/}
          <Grid.Column > </Grid.Column>

          <Grid.Column >
            <Header as = 'h1' content = 'Day by Day'
              style = {
                {
                      fontSize: '2em',
                      fontWeight: 'normal',
                      marginBottom: 0,
                      marginTop: '.5em',
                      textAlign: 'center'
                }
            }/>

        <LineChart width = {800} height = {300} data = {this.state.tweetData}
        margin = {{
                top: 5,
                right: 400,
                left: 5,
                bottom: 5
              }
            } >

            <XAxis dataKey = "name" / >
            <YAxis / >
            <CartesianGrid strokeDasharray = "3 3" / >
            <Tooltip / >
            <Legend / >
        <Line type = "monotone" dataKey = "Positive" stroke = "#8884d8"
          activeDot = {{r: 8}}/>
        <Line type = "monotone" dataKey = "Negative" stroke = "#82ca9d"/ >
      </LineChart>
    </Grid.Column >

    <Grid.Column > </Grid.Column>

  </Grid.Row>
</Grid>

</div>

    );

}


}