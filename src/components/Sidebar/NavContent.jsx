import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";
import externalUrls from "./externalUrls";
import styled from 'styled-components';
import { ReactComponent as StakeIcon } from "../../assets/icons/stake.svg";
import { ReactComponent as BondIcon } from "../../assets/icons/bond.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as OlympusIcon } from "../../assets/icons/olympus-nav-header.svg";
import { ReactComponent as PoolTogetherIcon } from "../../assets/icons/33-together.svg";
import { ReactComponent as ZapIcon } from "../../assets/icons/zap.svg";
import { ReactComponent as NewIcon } from "../../assets/icons/new-icon.svg";
import { ReactComponent as WrapIcon } from "../../assets/icons/wrap.svg";
import { ReactComponent as BridgeIcon } from "../../assets/icons/bridge.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { trim, shorten } from "../../helpers";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import useBonds from "../../hooks/Bonds";
import { Paper, Link, Box, Typography as Typograp, SvgIcon, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./sidebar.scss";
import LogoImg from '../../assets/icons/olympus-nav-header.png'
import Bondimg from '../../assets/ohm/bond@2x.png'
import Bondimg2 from '../../assets/ohm/bond2@2x.png'
import Dashboardimg from '../../assets/ohm/dashboard@2x.png'
import Dashboardimg2 from '../../assets/ohm/dashboard2@2x.png'
import Docsimg from '../../assets/ohm/docs@2x.png'
import Docsimg2 from '../../assets/ohm/docs2@2x.png'
import Stakeimg from '../../assets/ohm/stake@2x.png'
import Stakeimg2 from '../../assets/ohm/stake2@2x.png'

import Togetherimg from '../../assets/ohm/33-1@2x.png'
import Togetherimg2 from '../../assets/ohm/33@2x.png'

import NFTimg from '../../assets/ohm/nft-1@2x.png'
import NFTimg2 from '../../assets/ohm/nft@2x.png'


function NavContent() {
  const [isActive] = useState();
  const address = useAddress();
  const { bonds } = useBonds();
  const { chainID } = useWeb3Context();

  const checkPage = useCallback((match, location, page) => {
    const currentPath = location.pathname.replace("/", "");
    if (currentPath.indexOf("social") >= 0 && page === "social") {
      return true;
    }
    if (currentPath.indexOf("home") >= 0 && page === "home") {
      return true;
    }
    if (currentPath.indexOf("wallet") >= 0 && page === "wallet") {
      return true;
    }
    if (currentPath.indexOf("state") >= 0 && page === "state") {
      return true;
    }
    if (currentPath.indexOf("setting") >= 0 && page === "setting") {
      return true;
    }
    if (currentPath.indexOf("swap") >= 0 && page === "swap") {
      return true;
    }
    if (currentPath.indexOf("Presale") >= 0 && page === "Presale") {
      return true;
    }
    if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
      return true;
    }
    if (currentPath.indexOf("nft") >= 0 && page === "nft") {
      return true;
    }
    if ((currentPath.indexOf("bonds") >= 0 || currentPath.indexOf("choose_bond") >= 0) && page === "bonds") {
      return true;
    }
    return false;
  }, []);

  const isActiveFc = useCallback((name) => {
    return checkPage(null, window.location, name)
  }, [window.location])
  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header">
            <Link href="https://memekong.io/" target="_blank">
              {/* <SvgIcon
                color="primary"
                component={OlympusIcon}
                viewBox="0 0 151 100"
                style={{ minWdth: "151px", minHeight: "98px", width: "151px" }}
              /> */}
              <img src={LogoImg} alt="" style={{ width: "150px"}} />
            </Link>

            {address && (
              <div className="wallet-link">
                <Link href={`https://etherscan.com/address/${address}`} target="_blank">
                  {shorten(address)}
                </Link>
              </div>
            )}
          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              <Link
                component={NavLink}
                id="dash-nav"
                to="/home"
                isActive={(match, location) => {
                  return checkPage(match, location, "social");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={DashboardIcon} />
                  Home
                </Typography>
              </Link>

              <Link
                component={NavLink}
                id="stake-nav"
                to="/social"
                isActive={(match, location) => {
                  return checkPage(match, location, "stake");
                }}
              // className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6" className="fxCenter">
                  <SvgIcon color="primary" component={StakeIcon} />
                  Social
                </Typography>
              </Link>
              <Link
                component={NavLink}
                id="stake-nav"
                to="/wallet"
                isActive={(match, location) => {
                  return checkPage(match, location, "swap");
                }}
              // className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6" className="fxCenter">
                  <SvgIcon color="primary" component={ZapIcon} />
                  Wallet
                </Typography>
              </Link>
              <Link
                component={NavLink}
                id="calculator-nav"
                to="/state"
                isActive={(match, location) => {
                  return checkPage(match, location, "calculator");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={PoolTogetherIcon} />
                  State
                </Typography>
              </Link>
              {/* <Link
                component={NavLink}
                id="presale-nav"
                to="#"
                isActive={(match, location) => {
                  return checkPage(match, location, "Presale");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={WrapIcon} />
                  Nodes
                </Typography>
              </Link>
              <Link
                component={NavLink}
                id="presale-nav"
                to="#"
                isActive={(match, location) => {
                  return checkPage(match, location, "Presale");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={WrapIcon} />
                  Helper Center
                </Typography>
              </Link> */}
            </div>
          </div>
        </div>
        <Box className="dapp-menu-bottom" display="flex" justifyContent="space-between" flexDirection="column">
          <div className="dapp-menu-external-links">
            {/* {Object.keys(externalUrls).map((link, i) => {
              return (
                <Link key={i} href={`${externalUrls[link].url}`} target="_blank">
                  <Typography variant="h6">{externalUrls[link].icon}</Typography>
                  <Typography variant="h6">{externalUrls[link].title}</Typography>
                </Link>
              );
            })} */}
          </div>
          <div className="dapp-menu-social">
            <Social />
          </div>
        </Box>
      </Box>
    </Paper>
  );
}

export default NavContent;



const ANavIcon = styled.div`
  width:20px;
  height: 20px;
  background-image: url(${props => props.bg1});
  background-size: 100%;
  margin-right:12px;
`

const ANavLink = styled(Link)`
  &:hover,&.active{
    text-decoration:none;
    h6{
    }
    ${ANavIcon}{
      background-image: url(${props => props.bg2});
    }
  }
`

const Typography = styled(Typograp)`
  display: flex;
  align-items: center;
`
