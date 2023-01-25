import React,{useState,useEffect} from 'react';
import "./NewsFeed.css";
import SaveAltSharpIcon from '@material-ui/icons/SaveAltSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


function NewsFeed()
{

    const sampleJson =[{id:"1",Title:"Teslas made in Texas will likely have to leave the state before Texans can buy them", description:"Tesla will be building some of its cars in Texas, but those cars will have to go out of their way to make it to an actual Texan. This is because of a law that requires orders to be processed outside of the state, which seemingly won’t be changed anytime soon.",like:false,save:false, url: "https://www.theverge.com/2021/5/30/22457455/tesla-texas-factory-law-ship-out-of-state-direct-sale-legislation"},
    {id:"2",Title:"Why Cryptomining Is Bad for the Environment, And How It Could Get Better", description:"Recently, Tesla announced it would accept Bitcoin payments only to cancel that plan just over a month later. The company said, “Cryptocurrency is a good idea … but this cannot come at great cost to the environment.” Why is cryptocurrency bad for the environme…",like:false,save:false,url: "https://www.reviewgeek.com/85029/why-cryptomining-is-bad-for-the-environment-and-how-it-could-get-better/"},
    {id:"3",Title:"June Dogs Of The Dow: Merck Tops By Net Gains", description:"The Dow adds a stock if the company has an excellent reputation, demonstrates sustained growth, and is of interest to a large number of investors.",like:false,save:false,url: "https://seekingalpha.com/article/4432110-june-dogs-of-the-dow-merck-is-tops-by-net-gains"},
    {id:"4",Title:"4 Ways to Start Investing With $100 or Less", description:"Research the best things you can buy for $100 and you might see drones, hoverboards, and voice-activated coffee makers. Fun stuff, for sure, but there's a different angle you can take with $100. Inve…",like:false,save:false,url: "https://www.fool.com/investing/2021/05/30/4-ways-to-start-investing-with-100-or-less/"},
    {id:"5",Title:"A toxic blot on the landscape: Solar farms are ruining views and causing misery for residents - and, critics say, they're filled with noxious chemicals, many are made by Chinese prisoners... and don't even work in gloomy British weather", description:"When Christopher and Heather Darwin retired to the Devon countryside 13 years ago, their view was a rolling green upland dotted with sheep and cows. \nToday, they can hardly bear to look.\nA sea of glinting solar panels stretches out, bank upon bank, across the…",like:false,save:false},
    {id:"6",Title:"Why investors should look beyond Big Tech", description:"By Paul R. La Monica, CNN Business Tech stocks are showing investors how durable they can be, bouncing back from two sharp sell-offs this year to continue a dramatic surge that has seen the Nasdaq more than double since March 2020. The Nasdaq is now up 6.6% t…",like:false,save:false},
    {id:"7",Title:"A survey shows that the pandemic has made cryptocurrencies more attractive to investors, but the biggest barrier to entry is a lack of knowledge", description:"The new study by the  Economist Intelligence Unit also found that investors primarily viewed cryptocurrencies as capital appreciation and asset diversification.",like:false,save:false},
    {id:"8",Title:"Sample News Heading", description:"Sample description of the the news that is shown just to full some empty space, for no reason!",like:false,save:false},
    {id:"9",Title:"Sample News Heading", description:"Sample description of the the news that is shown just to full some empty space, for no reason!",like:false,save:false},
    {id:"10",Title:"Sample News Heading", description:"Sample description of the the news that is shown just to full some empty space, for no reason!",like:false,save:false}]

    const [indicator, setShowIndicator] = useState(sampleJson);
    useEffect(() => {
    }, [indicator]);

    const [category, setCategory] = React.useState('Select');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(category,"categ");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    const handleLike=(e,id,idx)=>
    {
        e.preventDefault();
        const clone = indicator.filter((key)=>
        {
             return key.id != id;
        });
        const selected = indicator.filter((key)=>
        {
            return key.id === id;
        });
        selected[0].like = !selected[0].like;
        setShowIndicator([...clone,...selected]);
    };
    const handleSave =(e,id)=>
    {
        e.preventDefault();
        const clone = indicator.filter((key)=>
        {
             return key.id != id;
        });
        const selected = indicator.filter((key)=>
        {
            return key.id === id;
        });
        selected[0].save = true;
        setShowIndicator([...clone,...selected]);
    };
    console.log(indicator);
    return(
        <div className="Card-Wrapper">
            <div style={{paddingTop:"40px", paddingLeft:"100px"}}>
                <span style={{fontSize:"25px"}}>News Category: </span>
        <Select
        style={{width:"200px"}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={10}>Entertainment</MenuItem>
          <MenuItem value={20}>Business</MenuItem>
          <MenuItem value={30}>Politics</MenuItem>
          <MenuItem value={40}>Science</MenuItem>
          <MenuItem value={50}>Health</MenuItem>
        </Select>
        </div>
            {indicator.sort((a,b)=>{return a.id - b.id}).map((key,idx)=>
            <a href={key?.url} target="_blank" rel="noopener noreferrer">
            <div className="card">
        <h3 className="title">{key.Title}</h3>
        <p className="description">{key.description}</p>
        <div className="save-box">
            <div className="save-hover" onClick={(e)=>{handleSave(e,key.id)}}><span className="save">{key.save?"saved":"save"}</span><SaveAltSharpIcon className="save-icon"/></div>
            <div onClick={(e)=>{handleLike(e,key.id,idx)}}><FavoriteBorderSharpIcon className={key.like?"like-icon":""}/></div>
            </div>
      </div>
       </a>
            )}
        </div>
    )
}

export default NewsFeed;