import React,{useState} from 'react';
import "./TapNews.css";
import NewsFeed from "../NewsFeed/NewsFeed";
import SavedFeed from "../SavedFeed/SavedFeed";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import Dialog from '@material-ui/core/Dialog';

const TapNews = props =>
{
    const [indicator, setShowIndicator] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [open, setOpen] = useState(false);


    const handleClickNewsFeed =()=>
    {
        setShowIndicator(true);
    }

    const handleClickSavedFeed =()=>
    {
        setShowIndicator(false);
    }
    const handleOutsideClick=(e)=>
    {
      e.stopPropagation();
      setShowMenu(false);
    };
    const handleMenuClick=(e)=>
    {
      e.stopPropagation();
      setShowMenu(true);
    };
    const handleClose=()=>
    {
      setOpen(false);
    }

    document.body.addEventListener("click",handleOutsideClick);
    return(
        <div className="wrapper-news">
    <section class="hero">
  <header id="header">
    <a id="logo" href="#"></a>
    <nav className="menu-wrapper"> 
      <a onClick={handleMenuClick}>
        <MenuSharpIcon className="menu-icon"/>
        </a>
        {showMenu &&
        <div className="menu">
          <span className="about" onClick={()=>setOpen(true)}><InfoSharpIcon className="info"/>About</span>
          <span className="lagout"><ExitToAppSharpIcon className="logout"/>Lagout</span>
        </div>
}
    </nav>
  </header>
  <header class="hero-header">
    <h1 class="hero-title">News InShorts Feed</h1>
  </header>
  <footer class="hero-footer">
      <div className="button-wrapper">
    <a className={indicator? "button-primary":"button"} onClick={handleClickNewsFeed} href="#">News Feed</a>
    <a className={!indicator? "button-primary":"button"} onClick={handleClickSavedFeed} href="#">Saved Feed</a>
    </div>
  </footer>
</section>
{ indicator &&
    <NewsFeed/>
}
{
  !indicator &&
  <SavedFeed/>
}
<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
  <div style={{padding:"30px",display:"flex"}}>
  <div class="popup__photo">
        <img src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=700&q=80" alt="">
        </img>
      </div>
      <div style={{width:"70%"}}>
<h1 style={{fontSize:"2.5rem",
      fontWeight: "600",
      marginbottom: "2rem",
      texttransform: "uppercase",
      color: "#0A0A0A", borderBottom:"1px solid #686868"}}>random heading</h1>
<p style={{fontSize: "1.2rem",
      color: "#686868",
      lineHeight: "1.5"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex velit, viverra non vulputate vitae, blandit vitae nisl. Nullam fermentum orci et erat viverra bibendum. Aliquam sed varius nibh, vitae mattis purus. Mauris elementum sapien non ullamcorper vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget felis sit amet eros viverra pulvinar.</p>
      </div>
</div>
</Dialog>
        </div>
    )
};

export default TapNews;