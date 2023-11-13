const addresses = require("../addresses/tipsy")
const tipsyAbi = require("../abi/tipsy.json")
const numeral = require("numeral")
const db = require("./db")

const gettipsyData = async (web3s) => {
    const {web3} = web3s
    const blockNumber = await web3.eth.getBlockNumber() 
    const {tipsy_address} = addresses

    // Set number formatting default
    numeral.defaultFormat("0,0");
  

    // Instantiate all smart contract object(s)
    let tipsy = new web3.eth.Contract(tipsyAbi, tipsy_address.contract)
    
    // For converting to proper number of decimals
    const convert = (num, decimal) => {
      return Math.round((num / (10*10**(decimal-3))))/100
    }

    // Make tokenData object

    let tokenData = {
      eth: {
          totalSupply: {value: 0},
          circulatingSupply: {value: 0},
      }
    }
  

    // // Get base values 
    // tokenData.eth.totalSupply.value = await tipsy.methods.totalSupply().call()


    // // Circulating supply
    // tokenData.eth.circulatingSupply.value = tokenData.eth.totalSupply.value

    // // Set up descriptions
    // tokenData.eth.totalSupply.description = "Total supply of judas on ETH"
  
    // tokenData.eth.circulatingSupply.description = "Circulating supply of judas on ETH"
  
  
    // // Set names
  
    // tokenData.eth.totalSupply.name = "Total Supply ETH"
  
    // tokenData.eth.circulatingSupply.name = "Circulating Supply ETH"
  
     
    // Set converted and formatted value, block, and timestamp
    const tokendata = tokenData.eth

    Object.keys(tokendata).forEach(key => {
      // tokendata[key].value = convert(tokendata[key].value, 18)
      // tokendata[key].formattedValue = numeral(tokendata[key].value).format()
      tokendata[key].block = blockNumber
      tokendata[key].timestamp = Date()
    })
  
    
    try {
      const client = db.getClient()
      db.updateTipsyCoin(tokenData, client) 
    }
    catch(err) {
      console.log(err)
    }
  }

  module.exports = gettipsyData
