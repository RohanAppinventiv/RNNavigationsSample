const obj =  {
 shareMarketData:[
        {Market: 'AAPL', Price: 150.25, Change: 1.5, MarketCap: 2.5e6},
        {Market: 'GOOGL', Price: 2800.75, Change: -0.25, MarketCap: 1.9e10},
        {Market: 'MSFT', Price: 300.5, Change: 2.75, MarketCap: 2.8e9},
        {Market: 'AMZN', Price: 3500.0, Change: -1.2, MarketCap: 1.7e8},
        {Market: 'TSLA', Price: 750.8, Change: 5.6, MarketCap: 1.5e7},
        {Market: 'FB', Price: 325.4, Change: 0.8, MarketCap: 950e9},
        {Market: 'NFLX', Price: 550.6, Change: -2.3, MarketCap: 240e9},
        {Market: 'GOOG', Price: 2700.9, Change: 1.2, MarketCap: 1.8e10},
        {Market: 'IBM', Price: 120.3, Change: -0.5, MarketCap: 110e6},
        {Market: 'INTC', Price: 55.75, Change: 0.9, MarketCap: 250e11},
      ],
 graphData: {
    data: [80, 70, 60, 90, 77, 88, 93, 66, 57, 78, 69],
    baseCanvasHeight: 220,
    isAxisShown: false,
    xAxisItemBlockWidth: 28,
    maxBarWidth: 20,
    _barColors: ["#36AD58", "#236DC6", "#F7991A"]
    
 }
}

const DataSource = Object.freeze(obj);
export default DataSource;
