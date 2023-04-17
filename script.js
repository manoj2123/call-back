function num1(no, callback) {
    document.getElementById("display").innerHTML = no;
    console.log(no);
    callback(no);
  }
  
  function countDown(no, delay, callback) {
    setTimeout(() => {
      num1(no, callback);
    }, delay);
  }
  
  countDown("10", 1000, (no) => {
    countDown("9", 1000, (no) => {
      countDown("8", 1000, (no) => {
        countDown("7", 1000, (no) => {
          countDown("6", 1000, (no) => {
            countDown("5", 1000, (no) => {
              countDown("4", 1000, (no) => {
                countDown("3", 1000, (no) => {
                  countDown("2", 1000, (no) => {
                    countDown("1", 1000, (no) => {
                      num1("Happy Independence Day", () => {});
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  