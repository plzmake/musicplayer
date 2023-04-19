import React from 'react';
import BlogMusic from './img/BlogMusic.png'
import Styles from './Blog.module.scss'
class Blog extends React.Component {
  
  
  render() {
    
    return (
      <div className={Styles['post']} >
        
        <div>
        <h2 className={Styles['postTitle']}> BLOG</h2>
          <p className={Styles['postContent']}>Từ khi công nghệ internet phát triển, việc nghe nhạc trực tuyến đã trở nên rất phổ biến. Với sự xuất hiện của các trang web chơi nhạc trực tuyến, mỗi người dùng đều có thể truy cập và thưởng thức âm nhạc một cách dễ dàng và thoải mái</p><br></br>
        <p className={Styles['postContent']}>Những trang web như Spotify, Apple Music, Amazon Music… đã trở thành một phần không thể thiếu trong cuộc sống của mỗi người yêu âm nhạc. Với các ứng dụng này, người dùng có thể tìm kiếm, phát nhạc, tạo playlist và thậm chí chia sẻ những ca khúc yêu thích của mình</p><br></br>
        <p className={Styles['postContent']}>Một trong những website chơi nhạc trực tuyến hàng đầu mà bạn không thể bỏ qua đó chính là Music Player. Với thiết kế đơn giản và giao diện thân thiện,Music Player là một công cụ hữu ích để giúp các bạn thể hiện tình yêu của mình với âm nhạc.</p><br></br>
        <p className={Styles['postContent']}>Music Player là một trang web chơi nhạc trực tuyến cho phép người dùng phát nhạc trực tiếp trên trình duyệt của mình.  Music Player cho phép bạn thưởng thức những ca khúc yêu thích của mình một cách nhanh chóng và dễ dàng.</p>
        </div>
        <img src={BlogMusic} alt="" style={{width:'27.6%',height:'100%'}}/>
      </div>
    );
  }
}

export default Blog;


