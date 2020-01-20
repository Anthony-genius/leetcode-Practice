public class Solution {
    public int BalancedStringSplit(string s) {
        int lCount = 0;
        int rCount = 0;
        int balancedSubstringCount = 0;

        foreach (Char ch in s) {
            if (ch == 'R') {
                ++rCount;
            } else {
                ++lCount;
            }

            if (lCount == rCount) {
                ++balancedSubstringCount;
            }
        }

        return balancedSubstringCount;
    }
}