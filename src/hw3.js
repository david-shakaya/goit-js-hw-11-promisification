
// >>>>>>>>>>>>> - hw - 3

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// let time=0

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500)
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

        
      if (canProcess) {
        const data = ({ id:transaction.id, time:delay })
       resolve(data)
      }else {
        reject(transaction.id);
      }
   

    }, delay);
    
  })
  
};
// makeTransaction({ id: 70, amount: 150 }).then(delay => delay)
//   .then(delay => console.log(delay))

//   makeTransaction({ id: 71, amount: 150 }).then(delay => delay)
//   .then(delay => console.log(delay))

//   makeTransaction({ id: 72, amount: 150 }).then(delay => delay)
//   .then(delay => console.log(delay))

//   makeTransaction({ id: 73, amount: 150 }).then(delay => delay)
// .then(delay => console.log(delay))

const logSuccess = ({id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150})
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);


//    function logger(time) {
//     console.log(`Лог каждые ${time}ms. - ${Date.now()}`)
// }
// const intervalId = setInterval(logger, 1000, 1000);