const timerSeconds = process.argv.slice(2)

for(let second of timerSeconds) {
  second = Number(second);
  if (!isNaN(second) && second > 0 && timerSeconds.length >= 1) {
    setTimeout(()=>{console.log(`${second} seconds`)}, second*1000)
    setTimeout(()=>{process.stdout.write('\x07')}, second*1000)
  }
}

