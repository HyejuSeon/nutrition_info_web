import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import NavTabss from './NavTabs'
import BCNP from './chart/BCNP';
import SAPC from './chart/SAPC';
import TSPC from './chart/TSPC';
import SRBC from './chart/SRBC';

function Header(props) {
  return <header>
    <h1><a href="/" onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>

}


function SideTabs(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read/" + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return (<div>
      <article>
        <h2>{props.title }</h2>
        {props.body}
      

      </article>
      {props.chart}
      

  </div>)
  
}

function GraphPage() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'Top10', body: 'Top10 is ...' },
    { id: 2, title: 'Pie chart', body: 'Pie chart is ...' },
    { id: 3, title: 'Bar chart', body: 'Bar chart is ...' },
    { id: 4, title: 'Group chart', body: 'Group chart is ...'}
    ]
    const charts = [
        { id: 1, chart: 'BCNF' },
        { id: 2, chart: 'SAPC' },
        { id: 3, chart: 'SRPC' },
        { id: 4, chart: 'TSPC' }
    ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body = "Hello, WEB"></Article>

  } else if (mode === 'READ') {
    let title, body, chart = null;
    for (let i = 0; i < topics.length; i++){
      if (topics[i].id === id) {
        title = topics[i].title;
          body = topics[i].body;
          chart = charts[i].chart;
        }
    }   
    content = <Article title={title} body = {body} chart = {chart}></Article>
  }
  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={7}>
          <Header title="Nutrients" onChangeMode={() => {
            setMode('WELCOME');
          }}></Header>
        </Grid>
        <Grid item xs={5}>
          <NavTabss></NavTabss>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={2}>
          <SideTabs topics={topics} onChangeMode={(_id) => {
            setMode('READ');
            setId(_id);
          }}></SideTabs>
        </Grid>
        <Divider  orientation="vertical" flexItem />
        <Grid item>{content}</Grid>
      </Grid>

          <BCNP></BCNP>
          <SRBC></SRBC>
          <SAPC></SAPC>
          <TSPC></TSPC>
          
    </Container>
  );
}

export default GraphPage;
