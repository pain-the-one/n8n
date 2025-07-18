import unittest
from fibonacci import get_nth_fibonacci

class TestFibonacci(unittest.TestCase):

    def test_100th_fibonacci(self):
        # The 100th Fibonacci number is 354224848179261915075
        self.assertEqual(get_nth_fibonacci(100), 354224848179261915075)

if __name__ == '__main__':
    unittest.main()