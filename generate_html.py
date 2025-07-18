
import sys
from fibonacci import get_nth_fibonacci

def generate_fibonacci_table(n):
    table = "<table class=\\"table table-striped table-bordered\\">\\n"
    table += "<thead><tr><th>n</th><th>Fibonacci(n)</th></tr></thead>\\n"
    table += "<tbody>\\n"
    for i in range(1, n + 1):
        table += f"<tr><td>{i}</td><td>{get_nth_fibonacci(i)}</td></tr>\\n"
    table += "</tbody>\\n</table>"
    return table

if __name__ == "__main__":
    if len(sys.argv) > 1:
        n = int(sys.argv[1])
        print(generate_fibonacci_table(n))
