import unittest

class TestIndexHtml(unittest.TestCase):
    def test_hola_mundo(self):
        with open("index.html", "r", encoding="utf-8") as file:
            content = file.read()
            self.assertIn("Hola Mundo", content)

if __name__ == '__main__':
    unittest.main()