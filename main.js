// sleepIn 1
// function sleepIn(weekday, vacation){
//     return !weekday || vacation 
//   }

// monkeyTrouble 2
// function monkeyTrouble(aSmile, bSmile){
//     return aSmile == bSmile
//   }

// sumDouble 3
// function sumDouble(a, b){
//     return a !== b ? a+b : (a+b)*2
//   }

// diff21  4
// function diff21(n){
//     return n <= 21? 21-n : (n-21)*2
//   }

// parrotTrouble 5
// function parrotTrouble(talking, hour){
//     if (!talking)
//      return false;
//    else if (hour > 20 || hour < 7)
//      return true;
//    else
//      return false;
//  }

// making10  6
// function makes10(a, b){
//     return (a + b == 10 || a == 10 || b == 10);
// }

// nearHundred 7
// function nearHundred(n){
//     return Math.abs(100-n)<=10 || Math.abs(200-n)<=10;
//   }

// positiveNegative 8 
// function posNeg(a, b, negative){
//     if (negative && a < 0 && b < 0)
//        return true;
//      else if (!negative && a < 0 && b > 0)
//        return true;
//      else if (!negative && a > 0 && b < 0)
//        return true;
//      else
//        return false;
//    }


// notString 9
// function notString(str){
//     if(str.startsWith("not")){
//         return str;
//     }else{
//         return "not " + str;
//     }
//   }
// console.log(  notString("candy"));

// missingChar 10
// function missingChar(str, n){
//     return (str.substring(0, n) + str.substring(n+1, str.length))
//  }

// frontBack 11

// function frontBack(str){
//     let start = str.substring(0,1);
//     let end = str.substring(str.length-1);
//     let all = str.substring(1,str.length-1);
//      if(str.length > 1) return end + all +start
//      if(str.length <=1) return str
//      else str
//    }

// front3 12

// function front3(str){
//     if(str.length <=3) return str+str+str
//     let newStr = str.substring(0,3);
//     return newStr+newStr+newStr
//   }

// backAround 13

// function backAround(str){
//     let last = str.slice(str.length-1);
//     return last+str+last
//   }

// or35  14
// function or35(n){
//     if( n % 3 == 0 || n % 5 == 0 && !(n % 3 == 0 && n % 5 == 0) ){
//       return true;
//     }
//     return false;
//   }

// front 15
// function front22(str){
//     let temp = str.substring(0,2);
//     return str.length >2 ? temp+str+temp :str+str+str
//   }

// startHi 16
// function startHi(str){
//     let hi = str.startsWith("hi");
//     return hi?true:false
//   }

// icyHot 17
// function icyHot(temp1, temp2){
//     return (temp1<0&&temp2>100 || temp1>100 && temp2<0)?true:false
//   }

// in1020 18
// function in1020(a, b){
//     return ((10 <=a&& a<=20) ||(10 <=b&& b<=20))?true:false
//   }

// hasTeen 19
// function hasTeen(a, b, c){
//     return (13 <=a&& a<=19) || (13 <=b&& b<=19)||(13 <=c&& c<=19)?true:false
//   }

// loneTeen 20
// function loneTeen(a, b){
//     return (((a >= 13 && a <= 19) && !(b >= 13 && b <= 19)) ||
//           (!(a >= 13 && a <= 19) && (b >= 13 && b <= 19)));
//   }

// delDel 21
// function delDel(str){
//     if (str.startsWith("del",1)) {
//         return str.charAt(0)+str.substring(4, str.length);
//     }else 
//         return str
// }

// mixStart 22
// function mixStart(str){
//     let mix="ix";
//     return str.startsWith(mix,1) ? true:false
// }

// startOz 23
// function startOz(str){
//     if(str.length >=2 && str.substring(0,2) == "oz") return "oz"
//     if(str.length >=1 && str.substring(0,1) == "o") return "o"
//     if(str.length >=2 && str.substring(1,2)=="z") return "z"
//     else return ""
            
//  }

// intMax 24
// function intMax(a, b, c){
//     return Math.max(a,b,c)
//   }

// close10  25
// function close10(a, b){
//     let temp1 = Math.abs(a - 10);
//     let temp2 = Math.abs(b - 10);
//    if (temp1 == temp2)
//      return 0;
//    else if (temp1 > temp2)
//      return b;
//    else
//      return a;
 
//  }

// in3050 26
// function in3050(a, b){
//     if((a>=30 && a<=40)&&(b>=30 && b<=40) )
//         return true
//     else if((a>=40 && a<=50)&&(b>=40 && b<=50))
//         return true
//     else return false
//   }

// max1020 27
// function max1020(a, b){

//     let tempa;
//     let tempb;
//     if(a>=10 && a<=20)
//       tempa = a;
//     else
//       tempa = 0;
//     if(b>=10 && b<=20)
//       tempb = b;
//     else
//       tempb = 0; 
//     return Math.max(tempa, tempb)
    
//   }

// stringE 28
// function stringE(str){
//     let length = str.length;
//     let counter = 0;
//     for(let i = 0; i< length;i++){
//       if(str.charAt(i) === "e")
//         counter++
//     }
//     return counter>=1&&counter<=3?true:false
//   }
