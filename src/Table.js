
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";


import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";


import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';


import Input from './input';
import { Search } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme=>({
  table: {
    minWidth: 200,
    
  },
  searchInput: {
    width: '100%',
    marginBottom:theme.spacing(0)
},
tableandsearch:{

    //  marginLeft:theme.spacing(30),
    marginTop:theme.spacing(5),
    //  marginRight:theme.spacing(30),
    // alignItems:"center"
    
},

tablean:{
    marginLeft:theme.spacing(3),
  

},


}));

const TAble = () => {
  const classes = useStyles();
  
  const [search, setSearch] = useState("");
  const [covidData,setcovidData]=useState([]);


 

  const tableData=async ()=>{
    const tabledata= await fetch(
      'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
          'x-rapidapi-key': 'ba61444e23msh2308b97d6e9dcbap10dd42jsne2697e354bcb',
        },
      }
    )
      .then((response) =>
        response.json().then((data) => {
          setcovidData(data.countries_stat)
          // console.log(data.countries_stat);
        
        })
      )
      .catch((err) => {
        console.error(err)
      })
    
      }


  useEffect(() => {
    setInterval(()=>{
      tableData();
    },1500)
    
    
  }, []);
  return (
    <div className={classes.tableandsearch}>
                <Toolbar>
                        <Input
                        label="Search Country"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                    />
                    </Toolbar>
<div className={classes.tablean}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell align="right">Cases</StyledTableCell>
               <StyledTableCell align="right">Deaths </StyledTableCell>
              
              <StyledTableCell align="right">Total Recovery</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {covidData
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.country_name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.country_name}>
                    <StyledTableCell component="th" scope="row">
                      {item.country_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.cases}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.deaths}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.total_recovered}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default TAble;