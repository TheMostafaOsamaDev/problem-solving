class Solution {

  /**
   * @param String $s
   * @return Boolean
   */
  function isPalindrome($s) {
    $r = preg_replace("/[^a-zA-Z0-9]/", "", strtolower($s));

    return $r == strrev($r);   
  }
}