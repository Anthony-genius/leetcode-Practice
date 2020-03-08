### Code
import datetime
class Solution(object):
    def dayOfTheWeek(self, day, month, year):
        """
        :type day: int
        :type month: int
        :type year: int
        :rtype: str
        """
        x = datetime.datetime(year, month, day)
        return x.strftime("%A")