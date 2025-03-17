function verificaFibonacci(numero) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < numero) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    if (fib.includes(numero)) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
  }
  
  verificaFibonacci(21);
  verificaFibonacci(22);