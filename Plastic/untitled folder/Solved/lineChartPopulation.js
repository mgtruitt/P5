//year
var trace1 = {
  x: [1960,
1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
2009, 2010, 2011, 2012, 2013, 2014],
  
//plastic tonnes
   y: [8000000,
9000000, 11000000, 13000000, 15000000, 17000000, 20000000, 23000000, 27000000,
32000000, 35000000, 38000000, 44000000, 51000000, 52000000, 46000000, 54000000,
59000000, 64000000, 71000000, 70000000, 72000000, 73000000, 80000000, 86000000, 90000000,
96000000, 104000000, 110000000, 114000000, 120000000, 124000000, 132000000, 137000000,
151000000, 156000000, 168000000, 180000000, 188000000, 202000000, 213000000, 218000000,
231000000, 241000000, 256000000, 263000000, 280000000, 295000000, 281000000,
288000000, 313000000, 325000000, 338000000, 352000000,
367000000],
  name: 'yaxis data',
  type: 'BubblePlot'
};

//year
var trace2 = {
  x: [1960,
1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
2009, 2010, 2011, 2012, 2013, 2014],
 
//Population
  y: [
    3033212527,
    3090305279,
    3149244245,
    3210271352,
    3273670772,
    3339592688,
    3408121405,
    3479053821,
    3551880700,
    3625905514,
    3700577650,
    3775790900,
    3851545181,
    3927538695,
    4003448151,
    4079087198,
    4154287594,
    4229201257,
    4304377112,
    4380585755,
    4458411534,
    4537845777,
    4618776168,
    4701530843,
    4786483862,
    4873781796,
    4963633228,
    5055636132,
    5148556956,
    5240735117,
    5330943460,
    5418758803,
    5504401149,
    5588094837,
    5670319703,
    5751474416,
    5831565020,
    5910566295,
    5988846103,
    6066867391,
    6145006989,
    6223412158,
    6302149639,
    6381408987,
    6461370865,
    6542159383,
    6623847913,
    6706418593,
    6789771253,
    6873741054,
    6958169159,
    7043008586,
    7128176935,
    7213426452,
    7298453033,
    ],
  name: 'yaxis2 data',
  yaxis: 'y2',
  type: 'BubblePlot'
};

var data = [trace1, trace2];

var layout = {
  title: 'Double Y Axis Example',
  yaxis: {title: 'yaxis title'},
  yaxis2: {
    title: 'yaxis2 title',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right'
  }
};

Plotly.newPlot('PopDiv', data, layout);