var s=[
"2.html",
"http://biciklo.xyz/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE/",
"http://bitcoin-kran.xyz/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://greenfaucet.cf/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://bitco1n.net/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://www.bitcoinlife.xyz/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://www.adrianocoins.com/faucet/btc020/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://bitflips.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://freecoins.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://printmoney.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://btc.matronator.com/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://u24.co/ru/faucet/ref/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://xbit.co.in/faucet/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://mybitcoinclicks.com/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://xbtc.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://wombat-btc.ga/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://ifaucet.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://goodfortune.cybercity.space/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://btccran1.ru/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://www.btc-faucet.co/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://frymine.com/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://mybitvice.top/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://btccran3.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://btccran2.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://energyfaucet.xyz/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://btccran4.info/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://www.btc-faucet.co/?r=3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://mybitcoinclicks.com/3LPFrGr2bgPc6pmeSxL8Jx66qEbZjodGfE",
"http://faucetgame.com/r/18751313/faucet"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
