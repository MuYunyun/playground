window.onload = function () {
  // ---- some useful fn to do with linked_list ----

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  /**
   * create init linked list for lc. eg: 1, 2, 3, 4, 5
   */
  window.createLinkedList = function createLinkedList(...args) {
    const reverseArgs = args.reverse()
    const tmplistNode = new ListNode(0)
    let length = reverseArgs.length
    let cur = new ListNode(reverseArgs[length - 1])
    tmplistNode.next = cur
    while (length-- && length >= 1) {
      let next = new ListNode(reverseArgs[length - 1])
      cur.next = next
      cur = next
    }

    return tmplistNode.next
  }

  /**
   * print the linked list
   */
  window.printList = function printList(list) {
    let cur = list
    let str = ''
    while (cur) {
      str += `${cur.val} -> `;
      cur = cur.next
      cur === null && (str += 'null')
    }
    console.log(str)
  }

  /**
   * create tree node through tree array
   * this way supports three level tree temperaryly
   * becalse most test case in leetcode is less than 3 level.
   * input: [3, 9, 20, 6, null, 15, 7]
   * output:
           3
          / \
        9  20
      /   /  \
      6   15   7
  */
  window.createTree = function createTree(treeArr) {
    function TreeNode(val) {
      this.val = val
      this.left = this.right = null
    }
    const cacheObj = {}
    for (let i = 0; i < treeArr.length; i++) {
      cacheObj[`tree${i}`] = typeof treeArr[i] === 'number' && new TreeNode(treeArr[i])
    }

    for (let i = 0; i < treeArr.length; i++) {
      cacheObj[`tree${2 * i + 1}`] && (cacheObj[`tree${i}`].left = cacheObj[`tree${2 * i + 1}`])
      cacheObj[`tree${2 * i + 2}`] && (cacheObj[`tree${i}`].right = cacheObj[`tree${2 * i + 2}`])
    }

    return cacheObj['tree0']
  }
}
