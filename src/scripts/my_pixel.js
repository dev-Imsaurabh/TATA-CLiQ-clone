export default function my_pixel(value){
   let type = typeof(value)
   if(type=="string"){
    return value
   }
    return `${value}px`
} 