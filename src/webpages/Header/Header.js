import * as React from 'react';


import { Grid} from "@mui/material";

import Tooltip from '@mui/material/Tooltip';



import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


 import styles from './Header.module.scss'
 import {FaBars} from "react-icons/fa"



const Header = () => {
  
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
      document.getElementById('musicPlayer').style.top ='46px'
    } else{document.getElementById('list_type').style.display = 'none';
    document.getElementById('musicPlayer').style.top ='10px'
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
    <ul id='Header-sub' style={{display:'none',zIndex:'100'}} className='Header-sub'>
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



export default Header;