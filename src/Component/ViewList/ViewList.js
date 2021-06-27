import React,{useState, useEffect} from "react";
import OutlinedCard from "../Cards/Cards";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import "./ViewList.css";
import SearchIcon from "@material-ui/icons/Search";


export default function ViewList({items}) {
 

 const [searchValue, setsearchValue] = useState("")
 const [views, setviews] = useState(items)
useEffect(() => {
// console.log("hello", searchValue);
let tviews=items.filter(x=>x.name.includes(searchValue))
setviews(tviews)
 
}, [searchValue])

// useEffect(() => {

// }, [])
  return (
    <div>
      <div
        style={{
          width: "100%",
          disply: "flex",
        }}
      >
       
        <Grid container spacing={1} alignItems="flex-end"  style= {{justifyContent:"center", marginBottom:"10px", marginTop:"10px"}}>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" placeholder="Search" onChange={(event)=>setsearchValue(event.target.value)} />
          </Grid>
        </Grid>
    
      </div>
      <div className="Cards" style={{ magrinTop:"10px" }}>
        <Grid container justify="center" spacing={2} wrap="wrap">
          {views.map((item1, index) => {
            return (
              <Grid item key={index}>
                <OutlinedCard item={item1}></OutlinedCard>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
