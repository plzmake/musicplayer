import * as React from 'react';
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import SuggestionSearchBar from "./search-bar/SuggestionSearchBar";
import { Grid, useMediaQuery } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Logout from '@mui/icons-material/Logout';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import styled from '@emotion/styled';
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Cookies from 'js-cookie';
// import classNames from 'classnames/bind';
 import styles from './Header.module.scss'
 import {FaBars} from "react-icons/fa"

const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const handleSearchSubmit = async (term) => {
    // try {
    //   const response = await axios.get(`/api/books/search/${term}`);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  function handleClickBar(){
    const elements = document.getElementsByClassName("song");
    if(elements[0].style.display =='')
    {
      for(let i = 0; i < elements.length; i++){
        elements[i].style.display ='none';
      }
    }else  if (elements[0].style.display =='none'){
      for(let i = 0; i < elements.length; i++){
        elements[i].style.display ='';
      }
    }
  }
  function handleClickType(){
    if(document.getElementById('list_type').style.display == 'none'){
      document.getElementById('list_type').style.display = ''
      document.getElementById('musicPlayer').style.top ='68px'
    } else{document.getElementById('list_type').style.display = 'none';
    document.getElementById('musicPlayer').style.top ='32px'
  }
    
  }
  function handleClickContact(){
    window.scrollTo({ top: 1200, behavior: 'smooth' });
  }
  function handleClickShowSub(){
    if(document.getElementById('Header-sub').style.display == 'none'){
      document.getElementById('Header-sub').style.display = ''
      
    } else{document.getElementById('Header-sub').style.display = 'none'}
  }
  return (
    <>
    <Grid container spacing={2} alignItems="center" className="header-container">
    
      <Grid className='header-navbar' container item xs={2} md={5}
        >
         
        <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        
          <span className='header-container-logo' onClick={handleClickBar} >MUSIC</span>
          
        </Grid>
        
        <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <a className={styles['headerInfo']} href='/'><i>HOME</i></a>
        </Grid>
        <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <div className={styles['headerInfo']} ><i onClick={handleClickType} className={styles['headerText']}>TYPE MUSIC</i></div>
        </Grid>  
        <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <a className={styles['headerInfo']} href='/Blog'><i>BLOG</i></a>
        </Grid>
        <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <div id='contact_header' className={styles['headerInfo']}><i onClick={handleClickContact}>CONTACT</i></div>
        </Grid>        
      </Grid>
      
      {/* <Grid item xs={5} md={3}>
        <SuggestionSearchBar 
          
          searchText={searchTerm}
          setSearchText={setSearchTerm}
          handleSearch={handleSearchSubmit}
        />        
      </Grid> */}
      <Grid item xs={5} md={3} justify="flex-end"  className='showLog'  >
      
        <Tooltip id='reg' className={styles['headerPadding']} title="Đăng ký">
        <Grid className='header-info header-textalign' item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <a className={styles['headerLogin']} href='/Register'><i>Register</i></a>
          <PersonAddAlt1Icon  className={styles['headerLogin']}/>
        </Grid>
       
        
        </Tooltip>        
        <Tooltip id='login' className={styles['headerPadding']} title="Đăng nhập">
        <Grid className='header-info' item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <a className={styles['headerLogin']} href='/Login'><i>Login</i></a>
          <LoginIcon className={styles['headerLogin']}/>
        </Grid>
          
        
        </Tooltip>
      </Grid>            
    </Grid>
    <FaBars  className='headerIcon' onClick={handleClickShowSub}/>
    <ul id='Header-sub' style={{display:'none'}} className='Header-sub'>
      <li><span className='header-container-logo' onClick={handleClickBar} >MUSIC</span></li>
      <li><a className={styles['headerInfo']} href='/'><i>HOME</i></a></li>
      <li><div className={styles['headerInfo']} ><i onClick={handleClickType} className={styles['headerText']}>TYPE MUSIC</i></div></li>
      <li><a className={styles['headerInfo']} href='/Blog'><i>BLOG</i></a></li>
      <li><div id='contact_header' className={styles['headerInfo']}><i onClick={handleClickContact}>CONTACT</i></div></li>
      <li><Tooltip className={styles['headerPadding']} title="Đăng ký">
        <Grid className='header-info header-textalign' item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <a className={styles['headerInfo']} href='/Register'><i>Register</i></a>
          <PersonAddAlt1Icon  className={styles['headerLogin']}/>
        </Grid>
       
        
        </Tooltip></li>
      <li><Tooltip className={styles['headerPadding']} title="Đăng nhập">
        <Grid className='header-info' item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <a className={styles['headerLogin']} href='/Login'><i>Login</i></a>
          <LoginIcon className={styles['headerLogin']}/>
        </Grid>
          
        
        </Tooltip></li>
    </ul>
      </>
  );
};

// const handleLogOut = async () => {
//   try {
//     const response = await axios.post('http://www.btl-web.com/api/logout.php')
//     Cookies.remove('session_id')
//     Cookies.remove('role')
//     console.log(response)
//     window.location.href = '/'
//   } catch (error) {
//       console.log(error)
//   };  
// }

// const UserHeader = () => {
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSearchSubmit = async (term) => {
//     // try {
//     //   const response = await axios.get(`/api/books/search/${term}`);
//     //   console.log(response.data);
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   return (
//     <>
//     <Grid container alignItems="center" className="header-container">
//       <Grid container item xs={3} md={3}>
//         <Grid item xs={12} md={3}>
//           <IconButton
//             href='/'
//             size="small"
//             sx={{ ml: 2 }}
//           >
//             <TipsAndUpdatesIcon/>
//           </IconButton>    
//         </Grid> 
//         <Grid item md={9} sx={{ display: { xs: 'none', md: 'block' } }}>
//           <a className='header-container-logo' href='/'>Bookstore</a>
//         </Grid>      
//       </Grid>
//       <Grid item xs={5} md={7}>
//         <SuggestionSearchBar 
//           label="f" 
//           searchText={searchTerm}
//           setSearchText={setSearchTerm}
//           handleSearch={handleSearchSubmit}
//         />        
//       </Grid>
//       <Grid item xs={4} md={2} justify="flex-end" align="right">
//           <IconButton
//             href='cart'
//             size="small"
//             sx={{ ml: 2 }}
//           >
//             <ShoppingCartIcon/>
//           </IconButton> 
//           <Tooltip title="Hồ sơ của bạn">
//             <IconButton
//               onClick={handleClick}
//               size="small"
//               sx={{ ml: 2 }}
//               aria-controls={open ? 'account-menu' : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? 'true' : undefined}
//             >
//               <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//             </IconButton>
//           </Tooltip>
//         <Menu
//           anchorEl={anchorEl}
//           id="account-menu"
//           open={open}
//           onClose={handleClose}
//           onClick={handleClose}
//           PaperProps={{
//             elevation: 0,
//             sx: {
//               overflow: 'visible',
//               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//               mt: 1.5,
//               '& .MuiAvatar-root': {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               '&:before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: 'background.paper',
//                 transform: 'translateY(-50%) rotate(45deg)',
//                 zIndex: 0,
//               },
//             },
//           }}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//         >
//           <MenuItem>
//             <Avatar /> <MenuLink href='/view-profile'>Hồ sơ của bạn</MenuLink>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Avatar /> <MenuLink href='/edit-profile'>Chỉnh sửa hồ sơ</MenuLink>
//           </MenuItem>          
//           <Divider />
//           <MenuItem onClick={handleClose}>
//             <ListItemIcon>
//               <ReceiptLongIcon fontSize="small" />
//             </ListItemIcon>
//             <MenuLink href='/orders'>Danh sách đơn hàng</MenuLink>
//           </MenuItem>
//           <MenuItem onClick={() => {
//             handleLogOut()
//             handleClose()
//           }}>
//             <ListItemIcon>
//               <Logout fontSize="small" />
//             </ListItemIcon>
//             <MenuLink href='#'>Đăng xuất</MenuLink>
//           </MenuItem>
//         </Menu>
//       </Grid>            
//     </Grid>
//     </>
//   );
// };

// const AdminHeader = ({showSideBar, setShowSideBar}) => {
//   const isSmallScreen = useMediaQuery('(max-width: 960px)'); // md
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleToggleSidebar = () => {
//     setShowSideBar(!showSideBar);
//   };    

//   const handleSearchSubmit = async (term) => {
//     // try {
//     //   const response = await axios.get(`/api/books/search/${term}`);
//     //   console.log(response.data);
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   return (
//     <>
//     <Grid container alignItems="center" className="header-container">
//       <Grid container item xs={3} md={3}>
//         <Grid item xs={3} sx={{display: {xs: 'block', md: 'none'}}}>
//           {isSmallScreen && (
//             <IconButton onClick={handleToggleSidebar}>
//               <DashboardIcon />
//             </IconButton>      
//           )}        
//         </Grid>  
//         <Grid item xs={9} md={3}>
//           <IconButton
//             href='/'
//             size="small"
//             sx={{ ml: 2 }}
//           >
//             <TipsAndUpdatesIcon/>
//           </IconButton>    
//         </Grid> 
//         <Grid item md={9} sx={{ display: { xs: 'none', md: 'block' } }}>
//           <a className='header-container-logo' href='/'>Bookstore</a>
//         </Grid>      
//       </Grid>
//       <Grid item xs={5} md={7}>
//         <SuggestionSearchBar 
//           label="Tìm kiếm..." 
//           searchText={searchTerm}
//           setSearchText={setSearchTerm}
//           handleSearch={handleSearchSubmit}
//         />        
//       </Grid>
//       <Grid item xs={4} md={2} justify="flex-end" align="right">
//           <Tooltip title="Hồ sơ của bạn">
//             <IconButton
//               onClick={handleClick}
//               size="small"
//               sx={{ ml: 2 }}
//               aria-controls={open ? 'account-menu' : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? 'true' : undefined}
//             >
//               <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//             </IconButton>
//           </Tooltip>
//         <Menu
//           anchorEl={anchorEl}
//           id="account-menu"
//           open={open}
//           onClose={handleClose}
//           onClick={handleClose}
//           PaperProps={{
//             elevation: 0,
//             sx: {
//               overflow: 'visible',
//               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//               mt: 1.5,
//               '& .MuiAvatar-root': {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               '&:before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: 'background.paper',
//                 transform: 'translateY(-50%) rotate(45deg)',
//                 zIndex: 0,
//               },
//             },
//           }}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//         >
//           <MenuItem>
//             <Avatar /> <MenuLink href='/view-profile'>Hồ sơ của bạn</MenuLink>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Avatar /> <MenuLink href='/edit-profile'>Chỉnh sửa hồ sơ</MenuLink>
//           </MenuItem>          
//           <Divider />
//           <MenuItem onClick={() => {
//             handleLogOut()
//             handleClose()
//           }}>           
//             <ListItemIcon>
//               <Logout fontSize="small" />
//             </ListItemIcon>
//             <MenuLink href='#'>Đăng xuất</MenuLink>
//           </MenuItem>
//         </Menu>
//       </Grid>            
//     </Grid>
//     </>
//   );
// };

export default Header;