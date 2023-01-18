export default function discount(strike_price,price){
    let dis = Math.floor(((strike_price-price)/strike_price)*100)
    return dis<0?0:dis
}