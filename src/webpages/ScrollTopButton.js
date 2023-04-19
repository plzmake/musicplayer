import ScrollToTop from "react-scroll-to-top"
import UpArrow from './img/UpArrow.png'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

const styles = {
  backgroundColor: "none",
  boxShadow: 'none',
  // border: "1px solid #ccc",
  // borderRadius: "50%",
  // color: "#333",
  cursor: "pointer",
  fontSize: "24px",
  height: "40px",
  outline: "none",
  position: "fixed",
  right: "20px",
  bottom: "20px",
  textAlign: "center",
  width: "40px",
  background: "none"
};

export default function ScrollTopButton() {

  return (
    <ScrollToTop
      smooth
      style={styles}
      
      component={
        // <Fab size="medium" color="primary" aria-label="add">
          <img src={UpArrow} alt="scroll to top" width="40px"/>
        // </Fab>   
      }
      // style={{
      //   background: 'none'
      // }}   
    />
  )
}

// class ScrollTopButton {
//   constructor(selector) {
//     this.element = document.querySelector(selector);
//     this.handleScroll = this.handleScroll.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.hideButton = this.hideButton.bind(this);
//     this.visible = false;
//     this.init();
//   }

//   init() {
//     this.element.addEventListener('click', this.handleClick);
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   handleScroll() {
//     if (window.scrollY > 100) {
//       if (!this.visible) {
//         this.element.classList.add('visible');
//         this.visible = true;
//       }
//     } else {
//       this.hideButton();
//     }
//   }

//   hideButton() {
//     if (this.visible) {
//       this.element.classList.remove('visible');
//       this.visible = false;
//     }
//   }

//   handleClick() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }

// // Sử dụng component
// const scrollTopButton = new ScrollTopButton('.scroll-top-button');
