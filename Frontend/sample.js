// Your JSON data
let jsonData = {
    "Meta Data": {
        "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2024-05-14",
        "4. Time Zone": "US/Eastern"
    },
    "Monthly Time Series": {
        "2024-05-14": {
            "1. open": "165.6900",
            "2. high": "170.2600",
            "3. low": "162.6200",
            "4. close": "167.3600",
            "5. volume": "33698567"
        },
        "2024-04-30": {
            "1. open": "190.0000",
            "2. high": "193.2800",
            "3. low": "165.2605",
            "4. close": "166.2000",
            "5. volume": "98297181"
        },
        "2024-03-28": {
            "1. open": "185.4900",
            "2. high": "199.1800",
            "3. low": "185.1800",
            "4. close": "190.9600",
            "5. volume": "99921776"
        },
        "2024-02-29": {
            "1. open": "183.6300",
            "2. high": "188.9500",
            "3. low": "178.7500",
            "4. close": "185.0300",
            "5. volume": "88679550"
        },
        "2024-01-31": {
            "1. open": "162.8300",
            "2. high": "196.9000",
            "3. low": "157.8850",
            "4. close": "183.6600",
            "5. volume": "128121557"
        }
    }
};

// Extracting first values
let firstValues = {
    open: [],
    high: [],
    low: [],
    close: [],
    volume: []
};

for (let key in jsonData["Monthly Time Series"]) {
    let data = jsonData["Monthly Time Series"][key];
    console.log(key)
    firstValues.open.push(parseFloat(data["1. open"]));
    firstValues.high.push(data["2. high"]);
    firstValues.low.push(data["3. low"]);
    firstValues.close.push(data["4. close"]);
    firstValues.volume.push(data["5. volume"]);
}

const data =[...firstValues.open]
console.log(data);
const label  = Object.keys(jsonData['Monthly Time Series']);
console.log(label)