const inputTime = process.argv.slice(2);

for (let i = 0; i < inputTime.length; i++) {
  let waitTime = inputTime[i] * 1000
  setTimeout(() => {
    process.stdout.write("\07")
  }, waitTime)
};
