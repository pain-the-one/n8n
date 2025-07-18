def fibonacci_sequence(n):
    fib_list = []
    a, b = 0, 1
    for _ in range(n):
        fib_list.append(a)
        a, b = b, a + b
    return fib_list

if __name__ == "__main__":
    n = 100
    fib_numbers = fibonacci_sequence(n)
    for i, num in enumerate(fib_numbers):
        print(f"Fibonacci({i}): {num}")