var s=[
"2.html",
"http://bigbtc.win/?id=13625170",
"http://claimfreebtc.win/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://hotcoins.cf/?id=3655622",
"http://biciklo.xyz/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB/",
"http://bitcoin-kran.xyz/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://greenfaucet.cf/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://bitco1n.net/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://www.bitcoinlife.xyz/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://www.adrianocoins.com/faucet/btc020/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://bitflips.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://freecoins.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://printmoney.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://btc.matronator.com/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://u24.co/ru/faucet/ref/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://xbit.co.in/faucet/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://mybitcoinclicks.com/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://xbtc.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://wombat-btc.ga/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://ifaucet.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://goodfortune.cybercity.space/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://btccran1.ru/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://www.btc-faucet.co/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://frymine.com/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://mybitvice.top/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://btccran3.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://btccran2.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://energyfaucet.xyz/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://btccran4.info/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://www.btc-faucet.co/?r=1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
"http://mybitcoinclicks.com/1FdS3JNP3KRv8mFLo18SF2pbMosjqoXxiB",
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
