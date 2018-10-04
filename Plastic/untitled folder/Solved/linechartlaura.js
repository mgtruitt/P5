var trace1 = {
  x: [1960,
1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
2009, 2010, 2011, 2012, 2013, 2014],
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
  type: 'scatter'
};

var trace2 = {
  x: [1960,
1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
2009, 2010, 2011, 2012, 2013, 2014],
  y: [450.4666739,
462.3576439, 488.1055504, 514.711204, 552.512292, 589.758994, 626.6180813, 653.2554258,
690.6729034, 744.8710787, 802.2752664, 868.0622393, 981.1356993, 1172.417977, 1326.256104,
1449.549939, 1549.386466, 1722.30545, 1992.633702, 2274.930424, 2516.14233,
2536.292019, 2469.84708, 2483.675328, 2533.155146, 2616.358904, 3044.83186, 3406.729459,
3749.071456, 3863.748278, 4268.785387, 4449.307804, 4653.192823, 4657.247499,
4929.352526, 5398.858173, 5440.947779, 5345.923383, 5258.467557, 5381.157949,
5483.974348, 5380.681184, 5516.217183, 6113.762559, 6799.522593, 7271.416494, 7777.192958,
8653.498542, 9374.915072, 8779.886823, 9513.617798, 10448.68227, 10559.19627, 10723.60666,
10882.67516],
  name: 'yaxis2 data',
  yaxis: 'y2',
  type: 'scatter'
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

Plotly.newPlot('myDiv2', data, layout);



