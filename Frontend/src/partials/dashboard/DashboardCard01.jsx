import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import axios from 'axios';

function DashboardCard01(props) {
const jsonData = props.data;
const navigate = useNavigate();
let label = [];
for (let key in jsonData['Monthly Time Series']) {
  let parts = key.split("-");
  let date = `${parts[1]}-${parts[2]}-${parts[0]}`;
  label.push(date);
}
let firstValues = {
  open: [],
  high: [],
  low: [],
  close: [],
  volume: []
};
const stockname  = props.stockname;
const price = props.price;
for (let key in jsonData["Monthly Time Series"]) {
  let data = jsonData["Monthly Time Series"][key];
  // console.log(key)
    
  
  firstValues.open.push(parseFloat(data["1. open"]));
  firstValues.high.push(parseFloat(data["2. high"]));
  firstValues.low.push(parseFloat(data["3. low"]));
  firstValues.close.push(parseFloat(data["4. close"]));
  firstValues.volume.push(parseFloat(data["5. volume"]));
}

// const label  = Object.keys(jsonData['Monthly Time Series']);
  const chartData = {
  
    labels: [...label.slice(0,27)],
    datasets: [
      // Indigo line
      {
        data: [...firstValues.open.slice(0,27)],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Gray line
      {
        data : [...firstValues.high.slice(0,27)],
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  const removeItem =async (e) => {
    const res = await axios.post(`http://localhost:3000/api/v1/user/deletestock:${e.target.id}`);
    console.log(res.data)
  }
  const addItem = async (e) => {
    if(localStorage.getItem('auth-token')){
      const res = await axios.post( `http://localhost:3000/api/v1/user/deletestock:${e.target.id}`);
      console.log(res.data);
    }
    else{
      navigate('/home');
    }
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
         
            <li>
              {location.pathname=='/home' && 
              <div className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3 cursor-pointer" id={props.id} onClick={removeItem} >
                Remove
              </div>}
              {
                location.pathname=='/' && 
                <div className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3 cursor-pointer" id={props.id} onClick={addItem} >
                Add
              </div>
              }
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{stockname}</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{price}</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard01;
