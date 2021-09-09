/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 * 解题思路：使用双指针遍历链表，首先一个指针指向头部即第一个元素，第二个指针指向空，保存第一个指针指向元素的下一个元素，
 *           反转时将第一个指针指向元素的next指向第二个元素，将第二个指针指向第一个指针指向的元素，此时二者指向同一元素，
 *           将第一个指针指向保存好的元素，及下一个元素，此时完成了指针的前进和指针方向的改变，以此类推完成反转
 */

var reverseList = function (head) {
  let p1 = head
  let p2 = null
  while (p1) {
    let temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}

// 时间复杂度为O(n)
// 空间复杂度为O(1)