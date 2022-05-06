import { useSelector } from "react-redux";
import { Paper, Grid, Typography, Box, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import "./dashboard.scss";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import {Container, Row, Col, Table} from 'react-bootstrap';
import logo from "../../assets/MemeKongLogo.png";
import {Button, TextField} from "@material-ui/core";

function Dashboard() {
  // Use marketPrice as indicator of loading.
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  const isAppLoading = useSelector(state => !state.app?.marketPrice ?? true);
  const marketPrice = useSelector(state => {
    localStorage.setItem('rememberMe', 'QQQ');
    return state.app.marketPrice;
  });
  const circSupply = useSelector(state => {
    return state.app.circSupply;
  });
  const totalSupply = useSelector(state => {
    return state.app.totalSupply;
  });
  const marketCap = useSelector(state => {
    return state.app.marketCap;
  });

  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&cy=INR`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  return (
  <div>
    <div id="dashboard-view">
      <Grid container direction="row"  spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TradingViewWidget
            symbol={"ETHUSDT / WETHMKONG"}
            theme={Themes.LIGHT}
            interval="D"
            locale="en"
            timezone="America/New York"
            hideSideToolbar={true}
            hide_top_toolbar={true}
            news={["headlines"]}
            width="90%"
            height="500"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div style={{display:"flex", justifyContent:"center", marginTop: "40px", marginBottom:"30px"}}>
            <Typography style={{color: "#965E96", fontSize:"100px", lineHeight:"1.1", fontWeight:"600"}}>
              $MEME KONG
            </Typography>
          </div>
          <div>
            <Typography style={{fontSize:"25px", lineHeight:"1.2"}}>
            Meme Kong is redefining expectations and setting new standards where none existed. 
            we are promoting it based on shared experience and strength in numbers. 
            Meme Kong is community and utility in the first hybrid token.
            </Typography>
            <div style={{border:"1px solid white", borderRadius:"15px", padding:"30px", margin:"40px", fontSize:"40px", lineHeight:"1.0", textAlign:"center"}}>
              <Row>
                <Col style={{}}>
                  Price : AAA
                </Col>
                <Col>
                  24hr % : AAA
                </Col>
                <Col>
                  Volume : AAA
                </Col>
              </Row>
              {/* <Typography style={{fontSize:"40px", lineHeight:"1.0"}}>Token Price : AAA</Typography>
              <Typography style={{fontSize:"40px", lineHeight:"1.0"}}>Token Price : BBB</Typography>
              <Typography style={{fontSize:"40px", lineHeight:"1.0"}}>Token Price : CCC</Typography> */}
            </div>
          </div>
        </Grid>
      </Grid>

      <Container>

      </Container>
    </div>
    <Container>
      <div style={{display:"flex", justifyContent:"center", marginTop: "40px", marginBottom:"30px", alignItems: "center"}}>
        <img src={logo} withd="150px" height="150px" />
        <Typography style={{color: "#965E96", fontSize:"50px", lineHeight:"1.1", fontWeight:"600", marginLeft:"50px"}}>
          $MEME KONG Holders
        </Typography>
      </div>
      <div>
        <div style={{marginBottom:"10px", display:"flex", justifyContent:"space-between"}} >
          <TextField id="outlined-basic" label="new Address" variant="outlined" style={{width:"100%" }} />
          <Button variant="outlined" color="success" style={{marginLeft:"10px"}}>Add Address</Button>
        </div>
        <Table bordered style={{background:"#191f244d", color: "white"}} size="30sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  </div>
    
  );
}

export default Dashboard;
