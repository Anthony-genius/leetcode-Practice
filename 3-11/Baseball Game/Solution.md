### CODE
```
class Solution:
    def is_number(self,s):
        try:
            float(s)
            return True
        except ValueError:
            pass

        try:
            import unicodedata
            unicodedata.numeric(s)
            return True
        except (TypeError, ValueError):
            pass

        return False
    def calPoints(self, ops: List[str]) -> int:
        score = 0
        points = []
        for mark in ops:
            if self.is_number(mark):
                score = int(mark)
                points.append(score)
            if mark == "+":
                if len(points) >= 2:
                    score = points[-1] + points[-2]
                    points.append(score)
            if mark == "C":
                if len(points) >= 1:
                    points.pop(-1)
            if mark == "D":
                if len(points) >= 1:
                    score = 2 * points[-1]
                    points.append(score)
        return sum(points)
```
### TESTCASE
```
Input: ["5","2","C","D","+"]
Output: 30
```
```
Input: ["5","-2","4","C","D","9","+","+"]
Output: 27
```