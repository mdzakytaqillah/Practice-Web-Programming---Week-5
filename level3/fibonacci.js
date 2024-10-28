function fibonacci(n) {
    let fibArray = [0];
    if (n > 0) {
      fibArray.push(1);
    }
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
